import * as actionTypes from "./actionTypes";

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSusccess = data => ({
  type: actionTypes.AUTH_SUCCESS,
  data
});

export const authFail = err => ({
  type: actionTypes.AUTH_FAIL,
  err
});

export const auth = (name, password) => dispatch => {
  if (name === "Admin" && password === "123456") {
    dispatch(authSusccess({ token: name }));
  } else {
    dispatch(authFail({ err: "Wrong name or password" }));
  }
};
