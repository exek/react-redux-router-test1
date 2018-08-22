import * as actionTypes from "./actionTypes";
import * as api from "../api";

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSusccess = user => ({
  type: actionTypes.AUTH_SUCCESS,
  user
});

export const authFail = err => ({
  type: actionTypes.AUTH_FAIL,
  err
});

export const authLogout = () => ({
  type: actionTypes.AUTH_LOGOUT
});

export const auth = (email, password) => dispatch => {
  dispatch(authStart());
  return api
    .auth(email, password)
    .then(user => {
      dispatch(authSusccess(user));
      return true;
    })
    .catch(err => {
      dispatch(authFail(err.message));
    });
};
