import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  //connect
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: !!state.auth.token
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
