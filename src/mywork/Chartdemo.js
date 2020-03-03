import React, { Component } from 'react'
import Tab1 from './Tab1'


export default class Chartdemo extends Component {
    
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        let key= this.props.keys;
        // console.log(this.props.keys)
        if(key==="1"){
            return(
                <Tab1/>
            )
        }else{
        return(
        <h1>你还没登录<button style={{color:'blue'}}>立即登录</button></h1>
        )
        }
    }  
}
