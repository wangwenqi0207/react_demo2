let nextTodoId = 0
//增加todo
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

//过滤todo
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

//划掉todo
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}