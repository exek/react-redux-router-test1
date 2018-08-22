import * as actionTypes from "./actionTypes";
import * as api from "../api";

export const fetchNewsRequest = () => ({
  type: actionTypes.NEWS_FETCH_REQUEST
});

export const fetchNewsSuccess = news => ({
  type: actionTypes.NEWS_FETCH_SUCCESS,
  news
});

export const fetchNewsFail = error => ({
  type: actionTypes.NEWS_FETCH_FAIL,
  error
});

export const fetchNews = () => dispatch => {
  dispatch(fetchNewsRequest());
  return api
    .getNews()
    .then(news => {
      dispatch(fetchNewsSuccess(news));
      return true;
    })
    .catch(error => {
      dispatch(fetchNewsFail(error.message));
    });
};
