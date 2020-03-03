import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReactRedux extends Component {
  componentDidMount() {
    console.log('打印store',this.props)
  } 
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="App">
        <h2>当前楼层为{this.props.tiger}米</h2>
        <button onClick={PayIncrease}>点击增加</button>
        <button onClick={PayDecrease}>点击减少</button>
      </div>
    );
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  //打印一下dispatch是啥
  console.log('dispatch',dispatch)
  return {
    PayIncrease: () => dispatch({ type: 'add' }),
    PayDecrease: () => dispatch({ type: 'sub' })
  }
}

//导出的不是APP组件，而是connect后的APP组件
export default ReactRedux = connect(mapStateToProps, mapDispatchToProps)(ReactRedux)

