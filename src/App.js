import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Message from "./components/Message";

const App = () => (
  <Provider store={store}>
    <Message />
  </Provider>
);

export default App;
