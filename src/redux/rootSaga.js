import { all, call } from "redux-saga/effects";
import usersSagas from "./user/users.sagas";

export default function* rootSaga() {
  yield all([call(usersSagas)]);
}
