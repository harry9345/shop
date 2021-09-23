import { all, call } from "redux-saga/effects";
import usersSagas from "./user/users.sagas";
import productSagas from "./products/products.sagas";

export default function* rootSaga() {
  yield all([call(usersSagas), call(productSagas)]);
}
