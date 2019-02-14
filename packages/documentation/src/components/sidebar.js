import React from 'react';
import { Link } from 'gatsby';

/**
 * Sidebar
 *
 * @param {props} props
 */

const getLinkName = (page) => {
  if (page.node.fields.fileName === 'README') {
    return page.node.fields.slug;
  }

  return page.node.fields.fileName;
};

const Sidebar = ({ pages, siteTitle, components, allMarkDown }) => {
  return (
    <aside className="sidebar">
      <div className="search">
        <div className="input-wrap">
          <input type="search" value="" onChange={() => {}} placeholder="Type to search"/>
        </div>
      </div>

      <h1>{ siteTitle }</h1>

      <h4>Components</h4>
      <ul className="menu-list">
        {components.map((component) => {
          return (
            <li key={component.node.id}>
              <Link to={`/${component.node.fields.slug.toLowerCase()}/`}>{component.node.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>

      <h4>Documents</h4>
      <ul className="menu-list">
        {pages.map((page) => {
          return (
            <li key={page.node.id}>
              <Link to={`/${page.node.fields.slug.toLowerCase()}/`}>{page.node.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>

      <h4>External Documents</h4>
      <ul className="menu-list">
        {allMarkDown.map((page) => {
          return (
            <li key={page.node.id}>
              <Link to={`/${page.node.fields.slug.toLowerCase().replace(/ /g, '-')}/`}>{getLinkName(page)}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
