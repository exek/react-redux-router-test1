import * as actionTypes from "../actions/actionTypes";

const init = {
  user: null,
  error: ""
};

export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { user: null, error: "" };
    case actionTypes.AUTH_SUCCESS:
      return { ...state, user: action.user };
    case actionTypes.AUTH_FAIL:
      return { ...state, error: action.err };
    case actionTypes.AUTH_LOGOUT:
      return { user: null, error: "" };
    default:
      return state;
  }
};
