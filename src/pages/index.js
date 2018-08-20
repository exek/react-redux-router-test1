import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import LoginPage from "./Login";
import NewsPage from "./News";
import ProfilePage from "./Profile";
import HomePage from "./Home";

const Index = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Route path="/news" component={HomePage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
    </Fragment>
  );
};

Index.propTypes = {};

export default Index;
