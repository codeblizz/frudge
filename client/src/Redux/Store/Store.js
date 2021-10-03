import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/index";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
    DEV_TOOLS
      ? compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
      : compose(applyMiddleware(thunk))
);
export default store;