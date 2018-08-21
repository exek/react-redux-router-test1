import * as actionTypes from "./actionTypes";

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSusccess = token => ({
  type: actionTypes.AUTH_SUCCESS,
  token
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
    dispatch(authFail("Wrong name or password"));
  }
};
