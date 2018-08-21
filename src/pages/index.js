import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "../components/Navigation";
import PrivateRoute from "../components/PrivateRoute";
import NotFound from "./NotFound";

import routesConfig from "./routes";

const Index = ({ isAuth }) => {
  const navRoutes = routesConfig.filter(({ showInNav }) => {
    return typeof showInNav === "function" ? showInNav(isAuth) : showInNav;
  });

  return (
    <Fragment>
      <Navigation routes={navRoutes} />
      <Switch>
        {routesConfig.map(({ isPublic, path, component }) => {
          const RouteComponent = isPublic ? Route : PrivateRoute;
          return (
            <RouteComponent
              key={path}
              path={path}
              component={component}
              exact
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

Index.propTypes = {};

const mapStateToProps = state => ({
  isAuth: !!state.auth.token
});

export default withRouter(connect(mapStateToProps)(Index));
