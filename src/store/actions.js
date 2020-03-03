// import actionType from './actionType'


// //actions 有两种写法，第一种写成对象，不方便传参
// export const increase = {
//     type:actionType.INCREASE
// }
// export const decrease = {
//     type:actionType.DECREASE
// }


//第二种方法 写成一个方法，返回一个对象，可以传递参数
// export const increase=(id)=>{
//     return {
//         type:actionType.INCREASE,
//         payload:{
//             id
//         }
//     }
// }