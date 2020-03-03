import React, { Component } from 'react'
import './Relevancenum.css'

export default class Relevancenum extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='Relevancenum'>
                <div className='num_content'>
                    <p>应用关联业务数</p>
                    <h2>{this.props.data_num.num1}</h2>
                </div>
                <div className='num_content'>
                    <p>当前警告业务数</p>
                    <h2>{this.props.data_num.num2}</h2>
                </div>
                <div className='num_content num_content3' >
                    <p>最新警告业务</p>
                    <a href="#">花呗页面数据趋势</a>
                </div>
            </div>
        )
    }
}
