import { connect } from 'react-redux'
import { toggleTodo } from '../store2/actions'
//引入TodoList组件
import TodoList from './TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

//取数据 将todos传递给TodoList组件
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

//取方法 将onTodoClick方法传递给TodoList组件
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

//使用connect将store数据取出
const VisibleTodoList = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList