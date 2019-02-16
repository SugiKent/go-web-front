// import React from 'react'
import { connect } from 'react-redux'

import App from '../component/app'
import * as actions from '../actions/app'

const mapStateToProps = (state) => ({
  todos: state.todos
})

function mapDispatchToProps(dispatch) {
  return {
    submitTodo: (values) => {
      dispatch(actions.postTodo(values.title));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
