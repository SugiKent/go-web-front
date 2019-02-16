import React from 'react';
import { Field, reduxForm } from 'redux-form';

const TodoForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} >
      <Field
        id={'title'}
        name="title"
        component="input"
        type="text"
        placeholder="タイトル"
      />
      <input type='submit' value='登録' />
    </form>
  );
};

export default reduxForm({
  form: 'todoForm',
})(TodoForm);
