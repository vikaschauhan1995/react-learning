import { DECREASE, INCREASE } from "./constant"


export function increase(value){
    return {
        type: INCREASE,
        payload: value
    }
}

export function decrease(value) {
    return {
        type: DECREASE,
        payload: value
    }
}