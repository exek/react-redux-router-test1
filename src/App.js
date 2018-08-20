import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Message from "./components/Message";

import IndexPage from "./pages";
import LoginPage from "./pages/Login";
import NewsPage from "./pages/News";
import ProfilePage from "./pages/Profile";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
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

        <Route exact path="/" component={IndexPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Message />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
