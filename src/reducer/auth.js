import * as actionTypes from "../actions/actionTypes";

const init = {
  user: null,
  error: "",
  loading: false
};

export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, user: null, error: "", loading: true };
    case actionTypes.AUTH_SUCCESS:
      return { ...state, user: action.user, error: "", loading: false };
    case actionTypes.AUTH_FAIL:
      return { ...state, error: action.err, loading: false };
    case actionTypes.AUTH_LOGOUT:
      return init;
    case actionTypes.CLEAR_ERRORS:
      return { ...state, error: "" };
    default:
      return state;
  }
};
