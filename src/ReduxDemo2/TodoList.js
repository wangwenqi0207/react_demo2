import React from 'react'
import Todo from './Todo'

//todo组件
//接收todos数据渲染和onTodoClick删除线事件
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)



export default TodoList