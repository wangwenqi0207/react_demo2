import React, { Component } from 'react';

//引入类型检查插件
import PropTypes from 'prop-types'

export default class Demo2 extends Component {
  //类型检验
  static propTypes ={
    btnText:PropTypes.string
  }
  //没传值的话默认值
  static defaultProps = {
    btnText:'添加'
  }
  render() {
    return (
      <div> 
        <input type="text"/>
        <button>{this.props.btnText}</button>
      </div>
    );
  }
}
