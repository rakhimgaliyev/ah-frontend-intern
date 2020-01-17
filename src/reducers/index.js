import sorterReducer from "./sorter";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  sorter: sorterReducer
});

export default allReducers;
