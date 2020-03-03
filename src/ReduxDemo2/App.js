//父组件
import React from 'react'
//引入input及button组件
import AddTodo from './AddTodo'
//todo组件
import VisibleTodoList from './VisibleTodoList'
//底部点击过滤按钮
import Footer from './Footer'
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App