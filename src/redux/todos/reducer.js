import { FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_PENDING, SET_FETCH_TODOS_ERROR, SET_FETCH_TODOS_PENDING, SET_TODOS } from "./constants";



const initialState = {
    [FETCH_TODOS]: [],
    [FETCH_TODOS_PENDING]: false
};

const countReducer = (state = initialState, action) => {
    switch(action?.type) {
        case SET_TODOS:
            return { ...state, [FETCH_TODOS]: action?.payload };
        case SET_FETCH_TODOS_PENDING:
            return { ...state, [FETCH_TODOS_PENDING]: action?.payload }
        case SET_FETCH_TODOS_ERROR:
            return { ...state, [FETCH_TODOS_ERROR]: action?.payload };
        default:
            return state;
    }
}

export default countReducer;