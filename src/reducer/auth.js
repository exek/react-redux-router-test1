import * as actionTypes from "../actions/actionTypes";

const init = {
  token: null,
  error: ""
};

export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { token: null, error: "" };
    case actionTypes.AUTH_SUCCESS:
      return { ...state, token: action.token };
    case actionTypes.AUTH_FAIL:
      return { ...state, error: action.err };
    default:
      return state;
  }
};
