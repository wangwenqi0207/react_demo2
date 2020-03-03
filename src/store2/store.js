import { createStore } from 'redux'
import todoApp from './combineReducers '

//createStore的参数只接收一个reducer
const store = createStore(todoApp);
export default store