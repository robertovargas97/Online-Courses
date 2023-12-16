import { TodoListPropTypes } from "./Todo.types";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<TodoListPropTypes> = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
}) => {
  const component = (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
  return component;
};
