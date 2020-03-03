import React, { Component } from 'react'

//单独抽离的公共组件 作用 返回首页
//只有通过Route标签渲染的组件 才有路由属性 button没有通过Route标签渲染 所以不能直接使用this.props.history.push
//可通过withRouter高阶组件来使用


import {withRouter} from 'react-router-dom'

class  Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.goHome.bind(this)}>返回首页</button>
            </div>
        )
    }

    //编程式导航 返回首页
    goHome(){
        // console.log('路由',this.props)
        // this.props.history.push('/home')
        this.props.history.push({
            pathname:'/home',
            state:{
                x:"我是文章详情button组件传的值"
            }
        })
    }
}

export default withRouter(Button)