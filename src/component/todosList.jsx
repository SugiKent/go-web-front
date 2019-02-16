import React from 'react'

export default class TodosList extends React.Component {
  componentDidMount() {
    const {fetchTodos} = this.props
    fetchTodos()
  };

  render() {
    const {todos} = this.props

    if (this.props.todos.length > 0) {
      return (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.title}</li>
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
