import { createStore } from 'redux'
import reducer1 from './reducer1'

//createStore的参数只接收一个reducer
const store = createStore(reducer1);
export default store


