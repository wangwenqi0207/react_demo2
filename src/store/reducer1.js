
import actiontype from './actionType'

//这是reducer
const tiger = 10000 //定义数据

//根据不同的action.type处理不同的结果
const reducer1 = (state = tiger, action) => {
    console.log("action",action)
    switch (action.type) {
        case actiontype.DECREASE:
            return state += 100;
        case actiontype.INCREASE: 
            return state -= 100;
        default:
            return state;
    }
}

export default reducer1