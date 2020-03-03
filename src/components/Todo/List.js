import React, { Component } from 'react';
//引入类型检查插件
import PropTypes from 'prop-types'

export default class List extends Component {
 //父元素类型验证 验证todo是否是array，以及内部各项的数据类型验证
  static propTypes = {
      todo:PropTypes.arrayOf(PropTypes.shape({
          id:PropTypes.number.isRequired,
          title:PropTypes.string.isRequired,
          isComleted:PropTypes.bool.isRequired,
      })).isRequired
  }
  render() {
    console.log(this.props.todo) //父组件传来的todo
    let todo = this.props.todo
    return (
      <div> 
            {
                todo.map(item=>{
                return <div key={item.id}>{item.title}
                    <input 
                        style={{marginLeft:'30px'}} 
                        type="checkbox"
                        checked={item.isComleted}   //默认true的选中
                        onChange={this.handleBoxChange.bind(this,item.id)}  //当前点击的id传给onChange事件
                    />
                    <span>{item.isComleted?'已完成':'未完成'}</span>
                </div> 
                })
            }
      </div>
    );
  }
    handleBoxChange(id){
        //  console.log(id)
        this.props.onisComletedChange(id) //接收父元素的事件并传值
        
    }
}