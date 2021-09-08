import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import commentReducer from "./commentReducer";
import userReducer from "./userReducer";
import newsFeedReducer from "./newsFeedReducer";

const rootReducer = combineReducers({
  top: commentReducer,
  alert: alertReducer,
  fudge: userReducer,
  news: newsFeedReducer
});
export default rootReducer;