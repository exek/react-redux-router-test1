import * as actionTypes from "../actions/actionTypes";

const init = {
  user: null,
  loading: false,
  error: null
};

export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.USER_FETCH_REQUEST:
      return { ...init, loading: true };
    case actionTypes.USER_FETCH_SUCCESS:
      return { ...init, user: action.user };
    case actionTypes.USER_FETCH_FAIL:
      return { ...init, error: action.error };
    case actionTypes.CLEAR_ERRORS:
      return { ...state, error: "" };
    default:
      return state;
  }
};
