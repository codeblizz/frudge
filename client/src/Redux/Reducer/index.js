import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import commentReducer from "./commentReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  comment: commentReducer,
  alert: alertReducer,
  user: userReducer
});
export default rootReducer;