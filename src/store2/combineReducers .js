//combineReducers接收多个reducer

import { combineReducers } from 'redux'
import todos from './reducers'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp