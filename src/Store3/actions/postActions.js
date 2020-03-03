//action中做逻辑处理，定义不同逻辑的type类型，便于dispatch分发给store
import {FETCH_POSTS,NEW_POST} from './actionType'

// export function fetchPosts(){
//     console.log('触发action')
//     return function (dispatch){
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res=>res.json()) //解析json
//         .then(posts=>
//             //通过dispatch将数据派发出去
//             dispatch({
//                 type:FETCH_POSTS,
//                 payload:posts
//             })
//         ) 
//     }
// }

//ES6写法
//获取数据
export const fetchPosts =()=>dispatch=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json()) //解析json
        .then(item=>
            //通过dispatch将数据派发出去
            dispatch({
                type:FETCH_POSTS,
                payload:item
            })
        ) 
}

//提交数据
//将postData参数提交
export const createPost=postData=>dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(postData)
        })
        .then(res=>res.json())
        //提交之后将新数据返回，派发
        .then(item=> dispatch({
            type:NEW_POST,
            payload:item
        }))    
}