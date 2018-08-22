import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes }) => (
  <nav className="navbar navbar-dark bg-primary navbar-expand">
    <div className="container">
      <ul className="navbar-nav">
        {routes.map(({ title, path }) => (
          <li className="nav-item" key={path}>
            <NavLink
              className="nav-link"
              to={path}
              activeClassName="active"
              exact
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Navigation;
