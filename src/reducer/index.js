import { combineReducers } from "redux";
import news from "./news";
import auth from "./auth";
import user from "./user";

export default combineReducers({
  auth,
  news,
  user
});
