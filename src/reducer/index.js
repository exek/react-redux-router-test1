import { combineReducers } from "redux";
import news from "./news";

const message = (state = "Hello from redux store", action) => {
  return state;
};

export default combineReducers({
  message,
  news
});
