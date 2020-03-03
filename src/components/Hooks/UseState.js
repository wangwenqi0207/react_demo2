
import React ,{useState} from 'react'
import {render} from 'react-dom'


const Counter=()=>{
    console.log(useState(10)) //[10,function]
    const [count ,setCount] =useState(10)
    const [count2 ,setTitle] =useState("hello world")
    return(
        <div>
            <button onClick={()=>{setCount(count-1)}}>sub</button>
            <span>{count}</span>
            <button onClick={()=>{setCount(count+1)}}>add</button>
            <br></br>
            <span onClick={()=>{setTitle("hello react")}}>{count2}</span>
        </div>
    )
}


export default Counter