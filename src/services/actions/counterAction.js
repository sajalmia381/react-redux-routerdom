import {increment_value, decrement_value} from '../type'

// can make api request form here

export const incrementAction = (args) => {
    return {
        type: increment_value,
        payload: args
    }
}

export const decrementAction = (args) => {
    return {
        type: decrement_value,
        payload: args
    }
}