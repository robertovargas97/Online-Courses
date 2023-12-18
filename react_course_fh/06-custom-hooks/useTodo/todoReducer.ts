import { Todo, TodoAction } from '../CustomHooks.types'

export const todoReducer = (state: Todo[] = [], action: TodoAction) => {
  const removeTodo = (elementId: number) => {
    return state.filter((todo) => todo.id !== elementId)
  }

  const toggleDoneForTodo = (elementId: number) => {
    return state.map((todo) => {
      if (todo.id === elementId) {
        todo = { ...todo, done: !todo.done }
      }
      return todo
    })
  }

  switch (action.type) {
    case 'Add':
      state = [...state, action.payload]
      break
    case 'Delete':
      state = removeTodo(action.payload.id)
      break
    case 'Toggle':
      state = toggleDoneForTodo(action.payload.id)

      break

    default:
      break
  }

  return state
}
