import axios from 'axios'
import qs from 'qs'

const addTodo = (id, title) => ({
  type: 'ADD_TODO',
  id: id,
  title: title
})

const updateTodo = (id, title) => ({
  type: 'UPDATE_TODO',
  id: id,
  title: title
})

const addTodos = (todos) => ({
  type: 'ADD_TODOS',
  todos: todos
})

const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id: id
})

const goWebClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  crossDomain: true,
  withCredentials: false,
})

export const postTodo = title => {
  return async dispatch => {

    const params = {
      title: title
    }

    try {
      goWebClient.post('/todo', qs.stringify(params))
                            .then(response => {
                              console.log(response)
                              let id = response.data.id,
                                  title = response.data.title
                              dispatch(addTodo(id, title))
                            });
    } catch (err) {
      alert('error')
    }
  }
}

export const patchTodo = (value) => {
  let id = value.id,
      title = value.title

  return async dispatch => {

    const params = {
      id: id,
      title: title
    }

    try {
      goWebClient.patch('/todo', qs.stringify(params))

      dispatch(updateTodo(id, title))
    } catch (err) {
      alert('error')
    }
  }
}

export const fetchTodos = () => {
  return async dispatch => {

    try {
      goWebClient.get('/todos').then(function(response) {
        console.log(response.data);

        dispatch(addTodos(response.data))
      })
    } catch (err) {
      alert('error')
    }
  }
}

export const submitDeleteTodo = (id) => {
  return async dispatch => {

    try {
      goWebClient.delete('/todo/'+id).then(function(response) {
        console.log(response);

        dispatch(deleteTodo(id))
      })
    } catch (err) {
      alert('error')
    }
  }
}
