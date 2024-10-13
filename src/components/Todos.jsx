import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchTodos, getTodosFromLocalStorage, removeTodo } from '../redux/todos/actions';
import { SELECTED_TODOS } from '../redux/todos/constants';

const Todos = () => {
    const { fetch_todos_pending, fetch_todos, selected_todos } = useSelector(state => state?.todoReducer);
    // console.log("selected_todos=>>", selected_todos );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
        dispatch(getTodosFromLocalStorage());
    }, [dispatch]);
    return (
        <div>Todos
            <div style={{ height: '200px', overflow: 'scroll' }}>
                {fetch_todos_pending ? 'Loading...' :
                    fetch_todos?.map((item, index) => {
                        const selectedItem = selected_todos.find((i) => i.id === item.id);
                        let buttons = null;
                        if (selectedItem) {
                            buttons = <>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => dispatch(removeTodo(item))}>--</button>
                                ({selectedItem.quantity})
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => dispatch(addTodo(item))}>++</button>
                            </>
                        } else {
                            buttons = <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => dispatch(addTodo(item))}>++</button>
                        }
                        return <>
                            {buttons}
                            <div key={item?.id + "_" + index}>{item?.title}</div>
                        </>
                    })
                }
            </div >
            <div style={{ height: '200px', overflow: 'scroll' }}>
                <h1>Selected Todos</h1>
                <ul>
                    {selected_todos?.map((item, index) => {
                        return <li key={item.id + '_' + index}>{item.title}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Todos