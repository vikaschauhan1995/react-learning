import React from 'react';
import { ADD_TODO, FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_PENDING, GET_TODOS_FROM_LOCALSTORAGE, REMOVE_TODO, SELECTED_TODOS, SET_FETCH_TODOS_ERROR, SET_FETCH_TODOS_PENDING, SET_TODOS } from "./constants";



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
                const selecteItemIndex = prevSelectedItems.find(item => item.id === newTodo.id);
                let updatedTodoList = [];
                if (!selecteItemIndex) {
                    updatedTodoList = [...prevSelectedItems, { ...newTodo, quantity: 1 }];
                } else {
                    updatedTodoList = prevSelectedItems.map((item) => {
                        if (item?.id == newTodo?.id) {
                            return { ...item, quantity: item?.quantity + 1 };
                        }
                    });
                    // console.log("prevSelectedItems=>>", updatedTodoList);
                }
                localStorage.setItem(SELECTED_TODOS, JSON.stringify(updatedTodoList));
                return { ...state, [SELECTED_TODOS]: updatedTodoList }
            }
        case REMOVE_TODO:
            {
                const prevSelectedItems = state[SELECTED_TODOS];
                const todo = action?.payload;
                // const selecteItem = prevSelectedItems.find(item => item.id === todo.id);
                const updatedPrevSelectedItems = prevSelectedItems.filter((item) => {
                    if (item?.id == todo?.id) {
                        if (item?.quantity > 1) {
                            return { ...item, quantity: item.quantity-- };
                        }
                    } else {
                        return item;
                    }
                });
                // console.log("updatedPrevSelectedItems=>>", prevSelectedItems);
                localStorage.setItem(SELECTED_TODOS, JSON.stringify(updatedPrevSelectedItems));
                return { ...state, [SELECTED_TODOS]: updatedPrevSelectedItems };
            }
        case GET_TODOS_FROM_LOCALSTORAGE:
            {
                const todosFromLocalStorage = localStorage.getItem(SELECTED_TODOS);
                return { ...state, [SELECTED_TODOS]: JSON.parse(todosFromLocalStorage) ? JSON.parse(todosFromLocalStorage) : [] }
            }
        default:
            return state;
    }
}

export default countReducer;