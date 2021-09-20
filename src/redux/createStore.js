import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleWare();
export const middlewares = [thunk, sagaMiddleWare, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(rootSaga);
export default store;
