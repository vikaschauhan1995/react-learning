import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import todoSaga from './todos/saga';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});
// export const store = createStore(rootReducer,sagaMiddleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


sagaMiddleware.run(todoSaga);