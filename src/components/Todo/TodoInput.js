import React, { Component,createRef } from 'react';

export default class TodoInput extends Component {
  constructor(){
    super()
    this.state={
        inputValue:''
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    //定义createRef
    this.inputDom = createRef()
  }
  render() {
    return (
      <div> 
        <input type="text"
               value={this.state.inputValue}
               onChange={this.handleInput.bind(this)}
               onKeyUp={this.handleKeyUp}
               ref={this.inputDom}
        />
        <button onClick={this.handleAdd}>{this.props.btnText}</button>
      </div>
    );
  }

  //点击添加从state中获取最新值 输入框聚焦this.inputDom.current.focus()
  handleAdd(){
    if(this.state.inputValue ===''){
      return
    }else{
      //接收父组件addTodo事件，并将input参数传递给父元素
      this.props.addTodo(this.state.inputValue)
      console.log('inputDom',this.inputDom)
      this.setState({
        inputValue:""
      },()=>{
        this.inputDom.current.focus()
      })
    }
  }

  //获取input的值，并交给state 
  handleInput(e){
    // console.log(e.currentTarget.value)
    this.setState({
      inputValue:e.currentTarget.value
    })
  }

  //回车输入
  handleKeyUp(e){
    // console.log(e.keyCode)
    if(e.keyCode ===13){
       this.handleAdd()

       this.setState({
        inputValue:""
      })
    }
    
  }
}