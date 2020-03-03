import {ADD_COUNT} from '../actions/actionType'

let num = 10000
function counterReducer (state=num,action){
    console.log('我是count_action',action)
    switch (action.type){
        case ADD_COUNT :
            return state=state+100
        default:
            return state
    }
} 

export default counterReducer
