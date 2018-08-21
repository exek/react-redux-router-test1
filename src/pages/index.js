import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "../components/Navigation";
import PrivateRoute from "../components/PrivateRoute";

import NotFound from "./NotFound";

import routesConfig from "./routes";

const Index = () => {
  return (
    <Fragment>
      <Navigation routes={routesConfig} />
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

export default Index;
