import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import LoginPage from "./Login";
import NewsPage from "./News";
import ProfilePage from "./Profile";
import HomePage from "./Home";

import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <Fragment>
      <Navigation />
      <Route path="/news" component={HomePage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
    </Fragment>
  );
};

Index.propTypes = {};

export default Index;
