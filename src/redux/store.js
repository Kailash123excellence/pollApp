import { createStore } from "redux";
import rootReducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from "redux";
import rootSaga from "./saga/saga";

const sagaMiddleware=createSagaMiddleware()

const store=createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;