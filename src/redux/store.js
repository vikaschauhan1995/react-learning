import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { createStore } from 'redux';



// export const store = configureStore(rootReducer);
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());