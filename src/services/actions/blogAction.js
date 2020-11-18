import {blog_request, request_blog_success, request_blog_fail} from '../type'

import API from '../../api'

export const blogAction = () => {
    return async (disfatch) => {
        try{
            disfatch({
                type: blog_request
            })
            const response = await API.get('/post')
            console.log(response)
            disfatch({
                type: request_blog_success,
                payload: response.data.data
            })

        } catch(error) {
            disfatch({
                type: request_blog_fail,
                payload: error.message
            })
        }
    } 
}