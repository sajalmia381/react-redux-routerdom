import {single_blog_request, single_blog_success, single_blog_fail} from '../type'

import API from '../../api'

export const singleBlog = (id) => {
    return async (dispatch) => {
        console.log(dispatch)
        console.dir(dispatch)
        try{
            dispatch({
                type: single_blog_request,
            })
            const res = await API.get(`/post/${id}`)
            console.log(res.data)
            dispatch({
                type: single_blog_success,
                payload: res.data
            })
        } catch(error) {
            dispatch({
                type: single_blog_fail,
                payload: error.message
            })
        }
    }
}