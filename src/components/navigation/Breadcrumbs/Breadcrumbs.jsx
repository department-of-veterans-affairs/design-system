import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';

/**
 * React component to dynamically build breadcrumb links.
 * The Breadcrumbs component accepts an array of HTML A tags,
 * React Router LINK components, or a combination of the two.
 * The component also accepts hard-coded A or LINK elements
 * as props.children.
 */
class Breadcrumbs extends React.Component {
  // /** Experimenting with a speed boost that could be gleaned by only
  //  * re-rendering when absolutely necessary
  //  */
  // shouldComponentUpdate(nextProps) {
  //   const differentChildren = this.props.children !== nextProps.children;
  //   const mobileWidth = this.props.mobileFirstProp !== nextProps.mobileFirstProp;
  //   return differentChildren || mobileWidth;
  // }

  /**
   * Provide a means to add overriding classes
   */
  classNames() {
    const customClass = this.props.customClasses;
    const mobileFirst = this.props.mobileFirstProp
      ? 'va-nav-breadcrumbs--mobile'
      : null;

    return classNames('va-nav-breadcrumbs', mobileFirst, customClass);
  }

  /**
   * Build the breadcrumb links. Check the array length
   * and add an `aria-current` attribute to the last link.
   */
  renderBreadcrumbLinks = () => {
    return React.Children.map(this.props.children, (child, i) => {
      if (i === this.props.children.length - 1) {
        return (
          <li>
            {React.cloneElement(child, {
              'aria-current': 'page'
            })}
          </li>
        );
      }

      return <li>{child}</li>;
    });
  };

  render() {
    const { ariaLabel, mobileFirstProp } = this.props;
    const breadcrumbId = this.props.id || uniqueId('va-breadcrumbs-');
    const breadcrumbListId =
      this.props.listId || uniqueId('va-breadcrumbs-list-');

    return (
      <nav
        aria-label={ariaLabel}
        aria-live="polite"
        className={this.classNames()}
        data-mobile-first={mobileFirstProp}
        id={breadcrumbId}>
        <ul
          className="row va-nav-breadcrumbs-list columns"
          id={breadcrumbListId}>
          {this.renderBreadcrumbLinks()}
        </ul>
      </nav>
    );
  }
}

Breadcrumbs.defaultProps = {
  ariaLabel: 'Breadcrumb'
};

Breadcrumbs.propTypes = {
  /**
   * Adds an aria-label attribute to the <nav> element.
   * The aria-label will be read out when users navigate the
   * <Breadcrumbs/> component using a screen reader.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Optionally adds one or more CSS classes to the NAV element
   */
  customClasses: PropTypes.string,
  /**
   * Adds a custom id attribute to the NAV element
   */
  id: PropTypes.string,
  /**
   * Adds a custom id attribute to the UL element
   */
  listId: PropTypes.string,
  /**
   * Adds CSS class `.va-nav-breadcrumbs--mobile` to the
   * NAV element. The mobile breadcrumb will always
   * be displayed while mobileFirstProp is True.
   */
  mobileFirstProp: PropTypes.bool
};

export default Breadcrumbs;
