import {user_request, request_user_fail, request_user_success} from '../type'

const initialState = {
    users: [],
    error: '',
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case user_request:
            return{
                ...state,
                loading: true
            }
        case request_user_success:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case request_user_fail:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return initialState
    }
}