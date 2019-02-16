// const todoData = [
//   {
//     title: 'テスト'
//   },
//   {
//     title: 'ほげ'
//   }
// ]

export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          title: action.title,
        }
      ]
    }
    case 'ADD_TODOS': {
      return Object.assign([], state, action.todos);
    }
    default:
      return state
  }
}
