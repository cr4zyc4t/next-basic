import { combineReducers } from "redux";
import counterReducer from "./counter";
import tableReducer from "./table";

const rootReducer = combineReducers({
  counter: counterReducer,
  table: tableReducer,
});

export default rootReducer;