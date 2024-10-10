import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todos/actions';

const Todos = () => {
    const { fetch_todos_pending, fetch_todos} = useSelector( state => state?.todoReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
    }, []);
  return (
    <div>Todos
        <div>
            { fetch_todos_pending ? 'Loading...' :
            fetch_todos?.map((item) => {
                return <div>{item?.title}</div>
            })
            }
        </div>

    </div>
  )
}

export default Todos