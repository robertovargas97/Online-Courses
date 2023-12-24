import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodo } from '../../src/hooks/useTodo'

jest.mock('../../src/hooks/useTodo')

const useTodoMock = useTodo as jest.MockedFunction<typeof useTodo>

describe('Todo App est Suit', () => {
  useTodoMock.mockReturnValue({
    handleAddTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    getNumberOfPendingTodos: jest.fn().mockReturnValue(1),
    todos: [
      { id: 1, description: 'Test Todo', done: false },
      { id: 2, description: 'Test Todo 2', done: true },
    ],
  })

  test('should display the component correctly', () => {
    render(<TodoApp />)

    const todos = screen.getAllByRole('listitem')
    expect(todos.length).toBe(2)
    expect(screen.getByText('Test Todo')).toBeTruthy()
    expect(screen.getByText('Test Todo 2')).toBeTruthy()

    screen.debug()
  })
})
