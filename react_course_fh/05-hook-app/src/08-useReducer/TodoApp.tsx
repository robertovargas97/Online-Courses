import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks'

export const TodoApp = () => {
  const {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    getNumberOfPendingTodos,
    todos,
  } = useTodo()

  const component = (
    <>
      <h1 className="text-center">
        Todo App - Total: ( {todos.length} ) - Pending: (
        {getNumberOfPendingTodos()} )
      </h1>
      <hr />

      <div className="row">
        <div className="col-8 offset-2 text-center">
          <h4> Add TODO </h4>
          <hr />
          <TodoAdd onNewTodo={handleAddTodo} />
        </div>
        <div className="col-8 text-center offset-2 mt-2">
          <hr />
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
    </>
  )

  return component
}
