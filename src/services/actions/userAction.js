import {user_request, request_user_fail, request_user_success} from '../type'

import API from '../../api'



export const userAction = () => {
    return async (dispatch) => {
        try{
            dispatch({
                type: user_request,
            })
            const response = await API.get('/user')
            dispatch({
                type: request_user_success,
                payload: response.data.data
            })

        } catch(error) {
            dispatch({
                type: request_user_fail,
                payload: error.message
            })
        }
    }
}