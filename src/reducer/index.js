import { combineReducers } from "redux";
import news from "./news";
import auth from "./auth";

const message = (state = "Hello from redux store", action) => {
  return state;
};

export default combineReducers({
  auth,
  message,
  news
});
