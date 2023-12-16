type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

type TodoAction = {
  type: string;
  payload: Todo;
};

const initialState: Todo[] | [] = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const todoReducer = (
  state: Todo[] | [] = initialState,
  action: TodoAction | undefined = undefined
) => {
  if (action?.type === "[TODO] add todo") {
    state = [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del Poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
