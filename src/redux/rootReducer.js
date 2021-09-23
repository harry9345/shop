import { combineReducers } from "redux";

import useReducer from "./user/User.reducer";
import productsReducer from "./products/products.reducer";

export default combineReducers({
  user: useReducer,
  productsData: productsReducer,
});
