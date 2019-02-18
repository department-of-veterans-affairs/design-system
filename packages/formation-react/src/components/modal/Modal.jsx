import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const ESCAPE_KEY = 27;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastFocus: null };
  }

  componentDidMount() {
    if (this.props.visible) this.setupModal();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      this.setupModal();
    } else if (prevProps.visible && !this.props.visible) {
      this.teardownModal();
    }
  }

  componentWillUnmount() {
    if (this.props.visible) {
      this.teardownModal();
    }
  }

  setupModal() {
    this.applyFocusToModal();
    document.body.classList.add('modal-open');
    document.addEventListener('keyup', this.handleDocumentKeyUp, false);
    document.addEventListener('focus', this.handleDocumentFocus, true);
    if (this.props.clickToClose) {
      document.addEventListener('click', this.handleDocumentClicked, true);
    }
  }

  teardownModal() {
    if (this.state.lastFocus) {
      this.state.lastFocus.focus();
    }
    document.body.classList.remove('modal-open');
    document.removeEventListener('keyup', this.handleDocumentKeyUp, false);
    document.removeEventListener('focus', this.handleDocumentFocus, true);
    if (this.props.clickToClose) {
      document.removeEventListener('click', this.handleDocumentClicked, true);
    }
  }

  handleDocumentKeyUp = (event) => {
    if (event.keyCode === ESCAPE_KEY) {
      this.handleClose(event);
    }
  }

  handleClose = (e) => {
    e.preventDefault();
    this.props.onClose();
  }

  handleDocumentFocus = (event) => {
    if (this.props.visible && !this.element.contains(event.target)) {
      event.stopPropagation();
      this.applyFocusToModal();
    }
  }

  handleDocumentClicked = (event) => {
    if (this.props.visible && !this.element.contains(event.target)) {
      this.props.onClose();
    }
  }

  applyFocusToModal() {
    const focusableElement = this.element.querySelector(this.props.focusSelector);
    if (focusableElement) {
      this.setState({ lastFocus: document.activeElement });
      focusableElement.focus();
    }
  }

  renderAlertActions = () => {
    const { primaryButton, secondaryButton } = this.props;
    if (!primaryButton && !secondaryButton) return null;

    return (
      <div className="alert-actions">
        {primaryButton && <button className="usa-button" onClick={primaryButton.action}>{primaryButton.text}</button>}
        {secondaryButton && <button className="usa-button-secondary" onClick={secondaryButton.action}>{secondaryButton.text}</button>}
      </div>
    );
  };

  render() {
    if (!this.props.visible) return null;

    const { id, status, title } = this.props;
    const titleId = title && `${id || 'va-modal'}-title`;

    const modalClass = classNames(
      'va-modal',
      { 'va-modal-alert': status },
      { [`va-modal-${status}`]: status },
      this.props.cssClass,
    );

    let closeButton;
    if (!this.props.hideCloseButton) {
      closeButton = (<button
        className="va-modal-close"
        type="button"
        aria-label="Close this modal"
        onClick={this.handleClose}>
        <i className="fas fa-times" aria-hidden="true"></i>
      </button>);
    }

    return (
      <div className={modalClass} id={id} role="alertdialog" aria-labelledby={titleId}>
        <div className="va-modal-inner" ref={el => { this.element = el; }}>
          {closeButton}
          <div className="va-modal-body" role="document">
            {title && <h3 id={titleId} className="va-modal-title">{title}</h3>}
            <div>
              {this.props.contents || this.props.children}
            </div>
            {this.renderAlertActions()}
          </div>

        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  /**
   * If the modal is visible or not
   */
  visible: PropTypes.bool.isRequired,
  /**
   * Handler for when the modal is closed
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Click outside modal will call onClose prop
   */
  clickToClose: PropTypes.bool,
  /**
   * Contents of modal when displayed. You can also pass the contents as children, which is preferred
   */
  contents: PropTypes.node,
  /**
   * CSS class to set on the modal
   */
  cssClass: PropTypes.string,
  /**
   * Id of the modal, used for aria attributes.
   */
  id: PropTypes.string,
  /**
   * Primary button text and action
   */
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  /**
   * Secondary button text and action
   */
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }),
  /*
   * Style of modal alert - info, error, success, warning
   */
  status: PropTypes.oneOf([
    'info',
    'error',
    'success',
    'warning'
  ]),
  /**
   * Title/header text for the modal
   */
  title: PropTypes.string,
  /**
   * Hide the close button that's normally in the top right
   */
  hideCloseButton: PropTypes.bool,
  /**
   * Selector to use to find elements to focus on when the
   * modal is opened
   */
  focusSelector: PropTypes.string
};

Modal.defaultProps = {
  clickToClose: false,
  focusSelector: 'button, input, select, a'
};

export default Modal;
