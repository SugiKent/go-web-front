import axios from 'axios'
import qs from 'qs'

const goWebClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  crossDomain: true,
  withCredentials: false,
})

const addTodo = (title) => ({
  type: 'ADD_TODO',
  title: title
})

const addTodos = (todos) => ({
  type: 'ADD_TODOS',
  todos: todos
})

export const postTodo = title => {
  return async dispatch => {

    const params = {
      title: title
    }

    try {
      const response = goWebClient.post('/todo', qs.stringify(params))
      console.log(response);

      dispatch(addTodo(title))
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
