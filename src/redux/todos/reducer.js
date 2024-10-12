import { ADD_TODO, FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_PENDING, GET_TODOS_FROM_LOCALSTORAGE, SELECTED_TODOS, SET_FETCH_TODOS_ERROR, SET_FETCH_TODOS_PENDING, SET_TODOS } from "./constants";



const initialState = {
    [FETCH_TODOS]: [],
    [FETCH_TODOS_PENDING]: false,
    [SELECTED_TODOS]: []
};

const countReducer = (state = initialState, action) => {
    switch (action?.type) {
        case SET_TODOS:
            return { ...state, [FETCH_TODOS]: action?.payload };
        case SET_FETCH_TODOS_PENDING:
            return { ...state, [FETCH_TODOS_PENDING]: action?.payload }
        case SET_FETCH_TODOS_ERROR:
            return { ...state, [FETCH_TODOS_ERROR]: action?.payload };
        case ADD_TODO:
            {
                const prevSelectedItems = state[SELECTED_TODOS];
                const newTodo = action?.payload;
                const newSelectedTodos = [...prevSelectedItems, newTodo];
                localStorage.setItem(SELECTED_TODOS, JSON.stringify(newSelectedTodos));
                return { ...state, [SELECTED_TODOS]: newSelectedTodos }
            }
        case GET_TODOS_FROM_LOCALSTORAGE:
            {
                const todosFromLocalStorage = localStorage.getItem(SELECTED_TODOS);
                return { ...state, [SELECTED_TODOS]: JSON.parse(todosFromLocalStorage) }
            }
        default:
            return state;
    }
}

export default countReducer;