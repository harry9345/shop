import { combineReducers } from "redux";

import useReducer from "./user/User.reducer";

export default combineReducers({
  user: useReducer,
});
