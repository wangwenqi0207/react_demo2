import React from 'react'
//引入类型检查插件
import PropTypes from 'prop-types'
 
//函数式组件
export default function Demo(props){
    console.log(props) //{title: "待办事项", children: "我是其他传值"}
    return(
        <div>
            <p>我是父元素传来的：{props.title}</p>
            <p>我是父元素中标签内的传值：{props.children}</p>
            <p>我是父元素传来的数字：{props.x+props.x}</p>
        </div>
    )
}

Demo.propTypes={
    title:PropTypes.string,
    x:PropTypes.number.isRequired  //监测是否为必传
}