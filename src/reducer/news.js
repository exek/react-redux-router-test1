import * as actionTypes from "../actions/actionTypes";

const init = {
  loading: false,
  error: null,
  data: null
};

export default (state = init, action) => {
  switch (action.type) {
    case actionTypes.NEWS_FETCH_REQUEST:
      return { ...init, loading: true };
    case actionTypes.NEWS_FETCH_SUCCESS:
      return { ...init, data: action.news };
    case actionTypes.NEWS_FETCH_FAIL:
      return { ...init, error: action.error };
    case actionTypes.CLEAR_ERRORS:
      return { ...state, error: "" };
    default:
      return state;
  }
};
