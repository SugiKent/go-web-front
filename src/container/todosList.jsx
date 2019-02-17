// import React from 'react'
import { connect } from 'react-redux'

import TodosList from '../component/todosList'
import * as actions from '../actions/app'

const mapStateToProps = state => ({
  todos: state.todos
})

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => {
      dispatch(actions.fetchTodos());
    },
    updateTodo: (value) => {
      dispatch(actions.patchTodo(value));
    },
    deleteTodo: (e, id) => {
      dispatch(actions.submitDeleteTodo(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
