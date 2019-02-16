import React from 'react'
import TodosList from '../container/todosList'
import TodoForm from './todoForm'

export default class App extends React.Component {
  render() {
    const {submitTodo} = this.props
    return <div>
      <TodoForm onSubmit={submitTodo}/>
      <TodosList />
    </div>
  }
}
