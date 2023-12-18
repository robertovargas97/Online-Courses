export type OnSubmitFunctionType = (
  event: React.FormEvent<HTMLFormElement>,
) => void

export type Todo = {
  id: number
  description: string
  done: boolean
}

export interface TodoAddPropTypes {
  onNewTodo: (todo: Todo) => void
}

export interface TodoItemPropTypes {
  todo: Todo
  onDeleteTodo: (id: number) => void
  onToggleTodo: (id: number) => void
}

export interface TodoListPropTypes {
  todos: Todo[]
  onDeleteTodo: (id: number) => void
  onToggleTodo: (id: number) => void
}

export type TodoAction = {
  type: string
  payload: Todo
}
