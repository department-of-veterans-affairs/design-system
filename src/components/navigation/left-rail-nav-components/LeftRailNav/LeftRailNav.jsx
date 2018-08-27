import React from 'react';
import PropTypes from 'prop-types';

import SubLevel from '../SubLevel/SubLevel';

export default class LeftRailNav extends React.Component {
  getSubLevel(section, i) {
    if (section.links) {
      return (
        <SubLevel
          key={`${section.title} ${i}`}
          title={section.title}
          hidden={this.props.hidden(section.links)}
          isCurrentPage={(link) => this.props.isCurrentPage(link)}>
          {
            section.links.map((link, j) => {
              if (link.links) {
                return (
                  <SubLevel
                    key={`${link.title} ${j}`}
                    title={link.title}
                    hidden={false}
                    icon={false}
                    href={link.href}
                    isCurrentPage={(sublink) => this.props.isCurrentPage(sublink)}>
                    {
                      link.links.map((subLink, k) => {
                        return (
                          <li key={`${subLink.text} ${k}`}>
                            <a className={this.props.isCurrentPage(subLink) && 'usa-current'} href={`${subLink.href}`}>
                              {subLink.text}
                            </a>
                          </li>
                        );
                      })
                    }
                  </SubLevel>
                );
              }

              return (
                <li key={`${link.text} ${j}`}>
                  <a className={this.props.isCurrentPage(link) && 'usa-current'} href={`${link.href}`}>
                    {link.text}
                  </a>
                </li>
              );
            })
          }
        </SubLevel>
      );
    }

    return (
      <SubLevel
        key={`${section.title} ${i}`}
        title={section.text}
        href={section.href}
        isCurrentPage={(link) => this.props.isCurrentPage(link)}></SubLevel>
    );
  }

  render() {
    return (
      <div>
        <button type="button" className="va-btn-close-icon va-sidebarnav-close">Close this menu</button>

        <div className="left-side-nav-title"><i className={`icon-small fa ${this.props.icon}`}></i><h4>{this.props.title}</h4></div>
        <ul className="usa-sidenav-list">
          {
            this.props.data.map((section, i) => {
              return (
                this.getSubLevel(section, i)
              );
            })
          }
        </ul>
      </div>
    );
  }
}

LeftRailNav.propTypes = {
  stuff: PropTypes.string,
};

LeftRailNav.defaultProps = {};
