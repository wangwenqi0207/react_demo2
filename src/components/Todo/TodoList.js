import React, { Component } from 'react';
import{TodoInput,TodoHeader,List} from './index.js'

class TodoList extends Component {
  constructor(){
    super()
    this.state={
      title2:"今日事今日毕",
      todos:[{
        id:1,
        title:"吃饭",
        isComleted:true
      },
      { 
        id:2,
        title:"学习",
        isComleted:true
      },
      { 
        id:3,
        title:"睡觉",
        isComleted:false
      },
    ]
    }
  }
  render() {
    return (
      <div className="App">
        <TodoHeader title='待办事项'>
          {this.state.title2}
        </TodoHeader>
        <TodoInput btnText='add' addTodo={this.addTodo}/>
        <List todo={this.state.todos} onisComletedChange={this.onisComletedChange}></List>
      </div>
    );
  }

  //子组件传值事件
  addTodo=(todoTitle)=>{
    console.log('子元素传值',todoTitle)
    //注意不能用push这样写，因为push返回的是数组的长度
    // this.setState({
    //   todos:this.state.todos.concat({
    //     id:Math.random(),
    //     title:todoTitle,
    //     isComleted:false
    //   })
    // })
    //用push这样写
    // const newTodos = [...this.state.todos]
    // newTodos.push({
    //     id:Math.random(),
    //     title:todoTitle,
    //     isComleted:false
    // })
    // this.setState({
    //   todos:newTodos
    // })

    //第三种新值添加进数组的方法
    const newlist = {
      id:Math.random(),
      title:todoTitle,
      isComleted:false
    }
    this.setState({
      todos:[...this.state.todos,newlist]
    })
  }

  
  //点击checkbox取反
  onisComletedChange=(id)=>{
    console.log(id)
    const data = this.state.todos.map(item=>{
      if(item.id===id){
        item.isComleted=!item.isComleted
      }
      return item
    })
    this.setState({
      todos:data
    })
  }

}

export default TodoList