import { render, screen, waitFor } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'
import { userEvent } from '@testing-library/user-event'

describe('todoItem Test Suit', () => {
  const todo = {
    id: 1,
    description: 'Test Todo',
    done: false,
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should display the pending todo', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    )

    const liElement = screen.getByRole('listitem')
    const spanElement = screen.getByTestId('todo-desc')
    expect(liElement.className).toBe('list-group-item d-flex')
    expect(spanElement.className).toContain('align-self-center me-auto')
    expect(spanElement.className).not.toContain('text-decoration-line-through')
  })

  test('should display the completed todo', () => {
    todo.done = true
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    )

    const spanElement = screen.getByTestId('todo-desc')
    expect(spanElement.className).toContain('text-decoration-line-through')
  })

  test('should toggle the done status for the todo', async () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    )

    const buttonToToggle = screen.getByTestId('toggle-btn')
    userEvent.click(buttonToToggle)
    // # When using userEvent.<event> we should wait for the method to be called
    await waitFor(() => {
      expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })
  })

  test('should delete the the todo', async () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />,
    )

    const buttonToDelete = screen.getByTestId('delete-btn')
    userEvent.click(buttonToDelete)
    // # When using userEvent.<event> we should wait for the method to be called
    await waitFor(() => {
      expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})
