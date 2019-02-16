import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as reduxFormReducers } from 'redux-form'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import todos from './reducers/todos'

const reducer = combineReducers({
  form: reduxFormReducers,
  todos
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
