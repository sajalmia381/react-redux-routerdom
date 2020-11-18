import {blog_request, request_blog_success, request_blog_fail} from '../type'


const initial = {
    loading: false,
    blogs: [],
    error: ''
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initial, action){
    switch(action.type) {
        case blog_request:
            return {
                ...state,
                loading: true
            }
        case request_blog_success:
                return {
                    ...state,
                    blogs: action.payload,
                    loading: false
                }
        case request_blog_fail:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}