import { FETCH_TODOS } from "./constants";

export function fetchTodos() {
    return {
        type: FETCH_TODOS,
    }
}