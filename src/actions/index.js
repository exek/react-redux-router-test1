import * as actionTypes from "./actionTypes";

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

export const auth = (name, password, cb) => dispatch => {
  dispatch(authStart());
  if (name === "Admin" && password === "123456") {
    console.log("right");
    dispatch(authSusccess(name));
    if (cb) cb();
  } else {
    dispatch(authFail("Invalid name or password."));
  }
};
