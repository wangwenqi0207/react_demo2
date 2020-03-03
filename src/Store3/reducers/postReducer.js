import {FETCH_POSTS,NEW_POST} from '../actions/actionType'

//定义state中的数据
const initialState={
    items:[],
    //注意：用户提交的数据，是个对象
    // const post = {
    //     title:this.state.title,
    //     body:this.state.body
    // }
    newitems:{}
}

//创建reducer 
//reducer中不做逻辑处理，只做传递给store的作用，根据不同的action类型，
//判断返回什么state，没有action则不做state处理
//作用：传递，不做逻辑处理，接收旧state，返回action处理后的新state
//一个reducer接收一个state，如果想管理不同的state，可以创建多个reducer
export default function postReducer (state=initialState,action){
    // console.log('触发reducer')
    switch(action.type){
        //若触发FETCH_POSTS，返回请求的state数据
        case FETCH_POSTS:
            return{
                ...state,
                //将action中的新数据赋值给store的state中的数据
                items:action.payload
            }
        case NEW_POST:
            return{
                ...state,
                //将新数据返回赋值给newitems
                newitems:action.payload
            }
        //如果没有任何action 就return原state
        default:
            return state
    }
}
