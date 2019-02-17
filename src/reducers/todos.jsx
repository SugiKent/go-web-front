export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        }
      ]
    }
    case 'UPDATE_TODO': {
      let cloned = Object.assign([], state);

      let newCloned = cloned.map(function(item){
        if (item.id === action.id) {
          item.title = action.title
        }
        return item
      })
      return newCloned
    }
    case 'DELETE_TODO': {
      let cloned = Object.assign([], state);

      let newCloned = cloned.filter(item => item.id !== action.id)
      return newCloned
    }
    case 'ADD_TODOS': {
      return Object.assign([], state, action.todos);
    }
    default:
      return state
  }
}
