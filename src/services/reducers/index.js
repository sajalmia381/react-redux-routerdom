import {combineReducers} from 'redux'

import counterReducer from './counterReducer'
import userReducer from './userReducer'
import blogReducer from './blogReducer'
import singleBlog from './singleBlog'

export default combineReducers({
    counterReducer,
    userReducer,
    blogReducer,
    singleBlog,
    // add more reducer
})