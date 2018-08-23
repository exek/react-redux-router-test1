import * as actionTypes from "./actionTypes";

export { auth, authLogout } from "./auth";
export { fetchUser } from "./user";
export { fetchNews } from "./news";

export const clearErrors = () => ({
  type: actionTypes.CLEAR_ERRORS
});
