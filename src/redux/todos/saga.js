
import axios from 'axios';
import { FETCH_TODOS, SET_FETCH_TODOS_ERROR, SET_FETCH_TODOS_PENDING, SET_TODOS } from './constants';
import { takeLatest, put, call } from 'redux-saga/effects';

function* fetchTodos(params){
    try {
        yield put({ type: SET_FETCH_TODOS_PENDING, payload: true });
        const response = yield axios.get('https://jsonplaceholder.typicode.com/todos');
        if (response?.data?.length) {
            // debugger;
            yield put({ type: SET_TODOS, payload: response?.data });
        }
        yield put({ type: SET_FETCH_TODOS_PENDING, payload: false });
    } catch (error) {
        yield put({ type: SET_FETCH_TODOS_ERROR, payload: error?.message });
        yield put({ type: SET_FETCH_TODOS_PENDING, payload: false });
    }
}

export default function* saga() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}