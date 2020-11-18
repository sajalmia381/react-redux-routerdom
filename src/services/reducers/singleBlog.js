import { single_blog_request, single_blog_success, single_blog_fail } from '../type'


const inititalState = {
    blog: {},
    loading: false,
    error: ''
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = inititalState, action) {
    switch(action.type){
        case single_blog_request:
            return {
                ...state,
                loading: true,
            }
        case single_blog_success:
            return {
                ...state,
                loading: false,
                blog: action.payload
            }
        case single_blog_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}