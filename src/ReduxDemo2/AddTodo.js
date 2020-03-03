import React from 'react'
//使用redux中的数据必须引入connect
import { connect } from 'react-redux'
//使用了actions里面的addTodo
import { addTodo } from '../store2/actions'


//input及button组件
let AddTodo = ({ dispatch }) => {

  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo