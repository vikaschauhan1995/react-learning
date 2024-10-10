import { combineReducers } from "redux";
import countReducer from './count/reducer';
import todoReducer from './todos/reducer'



export const rootReducer = combineReducers({
    countReducer,
    todoReducer
    // loginReducer
});