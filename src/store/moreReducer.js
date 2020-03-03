
//在实际的项目中，由于只有单一的store，但是状态会有很多分类，
//所以我们需要划分reducer，createStore参数又只接收一个reducer
//所以redux提供了一个用于合并多个reducer的方法
//注意：不要手动合并

import {combineReducers} from 'redux'
import reducer1 from './reducer1'

//引入xx reducer 如果有多个 继续引用
//在外部可以通过store.getState().xx来获取到里面的state

export default combineReducers({
    reducer1
})