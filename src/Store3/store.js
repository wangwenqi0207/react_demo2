import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
//引入rootReducer集合
import rootReducer from './reducers/index'

//store接收三个参数 第一个reducer或者reducer集合
//第二个
//第三个中间件方法
//applyMiddleware方法，将所有中间件组成一个数组，依次执行
const initialState={};
const middleware =[thunk];
const store = createStore(rootReducer,initialState,applyMiddleware(...middleware))

export default store