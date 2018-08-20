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

export const auth = (name, password) => dispatch => {
  dispatch(authStart());
  console.log(name, password);
  if (name === "Admin" && password === "123456") {
    console.log("right");
    dispatch(authSusccess(name));
  } else {
    dispatch(authFail("Wrong name or password"));
  }
};
