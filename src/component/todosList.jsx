import React from 'react'
import TodoListForm from './todoListForm'

export default class TodosList extends React.Component {
  componentDidMount() {
    const {fetchTodos} = this.props
    fetchTodos()
  };

  render() {
    const {todos, updateTodo, deleteTodo} = this.props

    if (todos.length > 0) {
      return (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{display: "flex"}}>
              <button onClick={e => deleteTodo(e, todo.id)}>&times;</button>
              <TodoListForm onSubmit={updateTodo} todo={todo} />
            </li>
          ))}
        </ul>
      )
    } else {
      return(
        <p>
          空です
        </p>
      )
    }
  }
}
