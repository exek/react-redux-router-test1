import * as actionTypes from "./actionTypes";
import * as api from "../api";

export const fetchUserRequest = () => ({
  type: actionTypes.USER_FETCH_REQUEST
});

export const fetchUserSuccess = user => ({
  type: actionTypes.USER_FETCH_SUCCESS,
  user
});

export const fetchUserFail = error => ({
  type: actionTypes.USER_FETCH_FAIL,
  error
});

export const fetchUser = id => dispatch => {
  dispatch(fetchUserRequest());
  return api
    .getUserById(id)
    .then(user => {
      dispatch(fetchUserSuccess(user));
      return true;
    })
    .catch(error => {
      dispatch(fetchUserFail(error.message));
    });
};
