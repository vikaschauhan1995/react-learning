import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../redux/count/actions';

const Count = () => {
    const countReducerState = useSelector(state => state?.countReducer);
    const { count } = countReducerState;
    // console.log("storeState=>>>", storeState);
    const dispatch = useDispatch();
    const increaseButton = () => {
        dispatch(increase(1));
    }
    const decreaseButton = () => {
        dispatch(decrease(1));
    }
  return (
    <div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={decreaseButton}>Decrease -</button>
        <h1>Count: {count}</h1>
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={increaseButton}>Increase +</button>
    </div>
  )
}

export default Count