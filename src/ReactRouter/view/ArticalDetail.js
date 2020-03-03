import React, { Component } from 'react'

import Button from './compoent/Button'

export default class ArticalDetail extends Component {
    render() {
        //console.log('ArticalDetail',this.props.location.state) //{from: "art隐式传参"}
        return (
            <div>
                文章详情 {this.props.match.params.id}
                {/* <div><button onClick={this.goHome.bind(this)}>返回首页</button></div> */}
                <Button></Button>
            </div>
        )
    }

    //编程式导航 返回首页
    // goHome(){
    //     // console.log('路由',this.props)
    //     // this.props.history.push('/home')
    //     this.props.history.push({
    //         pathname:'/home',
    //         state:{
    //             x:"我是文章详情传的值"
    //         }
    //     })
    // }
}
