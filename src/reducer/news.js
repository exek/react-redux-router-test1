import newsArr from "../assets/news";
import uuid from "uuid/v1";

const init = newsArr.slice(0, 10).map(item => {
  item["id"] = uuid();
  return item;
});

export default (state = init, action) => {
  return state;
};
