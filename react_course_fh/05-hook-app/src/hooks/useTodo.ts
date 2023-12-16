import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'
import { Todo } from '../08-useReducer/Todo.types'

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]')
}

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

  useEffect(() => {
    const serializedTodos = JSON.stringify(todos)
    localStorage.setItem('todos', serializedTodos)
  }, [todos])

  const handleAddTodo = (todo: Todo) => {
    const action = {
      type: 'Add',
      payload: todo,
    }
    dispatchTodo(action)
  }

  const handleDeleteTodo = (id: number) => {
    const action = {
      type: 'Delete',
      payload: { id: id, description: '', done: false },
    }
    dispatchTodo(action)
  }

  const handleToggleTodo = (id: number) => {
    const action = {
      type: 'Toggle',
      payload: { id: id, description: '', done: false },
    }
    dispatchTodo(action)
  }

  const getNumberOfPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length
  }

  return {
    handleAddTodo: handleAddTodo,
    handleDeleteTodo: handleDeleteTodo,
    handleToggleTodo: handleToggleTodo,
    getNumberOfPendingTodos: getNumberOfPendingTodos,
    todos: todos,
  }
}
