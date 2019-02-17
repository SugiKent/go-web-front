import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let TodoListForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} >
      <Field
        id={'title'}
        name="title"
        component="input"
        type="text"
        placeholder="タイトル"
        pristine={true}
      />
      <Field
        id={'id'}
        name="id"
        component="input"
        type="hidden"
      />
    </form>
  );
};

function mapStateToProps(state, props) {
  let todo = state.todos.filter(todo => todo.id === props.todo.id)[0]

  return {
    form: `todoListForm${todo.id}`,
    initialValues: todo
  }
}

TodoListForm = reduxForm({
  // 意図的に空
  // 詰めてもいいけど、見辛い
})(TodoListForm);

export default connect(mapStateToProps)(TodoListForm);

// TodoListForm = connect(
//   state => ({
//     // initialValues: state.todos[this.props.values.id]
//     initialValues: {
//       title: 'hoge'
//     }
//   })
// )(TodoListForm)

// export default TodoListForm
