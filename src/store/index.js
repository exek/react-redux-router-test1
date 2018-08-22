import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import { loadState, saveState } from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() =>
  saveState({
    auth: {
      user: store.getState().auth.user
    }
  })
);

export default store;
