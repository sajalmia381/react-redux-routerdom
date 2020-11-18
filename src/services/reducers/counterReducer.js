import {increment_value, decrement_value} from '../type';

const initialState = {
    count: 50
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case increment_value:
            return {
                ...state,
                count: state.count + action.payload
            }
        case decrement_value:
            return {
                ...state,
                count: state.count - action.payload
        }
        default:
            return state
    }
}