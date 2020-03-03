//将reducer集合起来的方法
import { combineReducers } from 'redux'
import postReducer from './postReducer'
import counterReducer from './counterReducer'

export default combineReducers({
    posts:postReducer,
    counter:counterReducer
})