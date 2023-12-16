import React from 'react'
import { useForm } from '../hooks/useForm'
import { OnSubmitFunctionType, Todo, TodoAddPropTypes } from './Todo.types'

export const TodoAdd: React.FC<TodoAddPropTypes> = ({ onNewTodo }) => {
  const { formState, onInputChange, onResetForm } = useForm({
    description: '',
  })
  const { description } = formState

  const onFormSubmit: OnSubmitFunctionType = (event) => {
    event.preventDefault()
    if (description.length > 1) {
      const newTodo: Todo = {
        id: new Date().getTime(),
        description: description,
        done: false,
      }
      onNewTodo(newTodo)
      onResetForm()
    }
  }

  const component = (
    <form onSubmit={onFormSubmit}>
      <input
        className="form-control"
        name="description"
        onChange={onInputChange}
        placeholder="What needs to be done?"
        type="text"
        value={description}
        id="description"
      />

      <button className="btn btn-success mt-2" type="submit">
        Add <i className="bi bi-plus"></i>
      </button>
    </form>
  )

  return component
}
