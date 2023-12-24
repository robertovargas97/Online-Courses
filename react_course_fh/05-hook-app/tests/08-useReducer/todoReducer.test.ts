import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Todo Reducer Test Suit ', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ]

  test('should return the initial state', () => {
    const newState = todoReducer(initialState, undefined)
    expect(newState).toBe(initialState)
  })

  test('should add a new Todo', () => {
    const action = {
      type: 'Add',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false,
      },
    }

    const newState = todoReducer(initialState, action)

    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('should remove a new Todo', () => {
    const action = {
      type: 'Delete',
      payload: initialState[0],
    }

    const newState = todoReducer(initialState, action)

    expect(newState.length).toBe(0)
  })

  test('should toggle the done for the todo', () => {
    const action = {
      type: 'Toggle',
      payload: initialState[0],
    }
    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBe(true)
  })
})
