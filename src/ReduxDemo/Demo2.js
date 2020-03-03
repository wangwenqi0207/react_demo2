import React, { Component } from 'react';
//哪个组件要用store中的内容 就在哪个组件引入
import { connect } from 'react-redux';

class Demo2 extends Component{
    componentDidMount() {
        console.log('我是接收的store中传值',this.props) //{num: 10000, add: ƒ}
      } 
    render(){
        const { add } = this.props;
        return(
            <div>
                这座山的高度{this.props.num}
                <button onClick={add}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log('我是store的数据',state) //10000
    //将state赋值给本组件的num
    return{
        num:state
    }
}

function mapDispatchToProps(dispatch) {
    return {
      add: () => dispatch({ type: 'add' }),
    }
  }

//导出时用connect()()第一个括号接收两个参数，参数名自定义，第一个是store数据，第二个是store中方法
//第二个括号中的参数是当前组件名
export default Demo2 =connect(mapStateToProps,mapDispatchToProps)(Demo2)