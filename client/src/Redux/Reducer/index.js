import { combineReducers } from "redux";
import successReducer from "./successReducer";
import errorReducer from "./errorReducer";
import supportReducer from "./supportReducer";
import dashboardReducer from "./dashboardReducer";
import newsfeedReducer from "./newsfeedReducer";
import advisoryReducer from "./advisoryReducer";
import menuToggleReducer from "./menuToggleReducer";
import documentReducer from "./documentReducer";

const rootReducer = combineReducers({
  errors: errorReducer,
  success: successReducer,
  menu: menuToggleReducer,
  dashboard: dashboardReducer,
  support: supportReducer,
  newsfeed: newsfeedReducer,
  advisory: advisoryReducer,
  document: documentReducer
});
export default rootReducer;