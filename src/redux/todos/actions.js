import { ADD_TODO, FETCH_TODOS, GET_TODOS_FROM_LOCALSTORAGE, REMOVE_TODO } from "./constants";

export function fetchTodos() {
    return {
        type: FETCH_TODOS,
    }
}

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function removeTodo(todo) {
    return {
        type: REMOVE_TODO,
        payload: todo
    }
}

export const getTodosFromLocalStorage = () => {
    return {
        type: GET_TODOS_FROM_LOCALSTORAGE,
    }
}