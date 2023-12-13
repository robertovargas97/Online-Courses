import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

export type Todo = {
  id: number;
  description: string;
  done: boolean;
};

const initialState: Todo[] | [] = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del Alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del Poder",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const component = (
    <>
      <h1 className="text-center"> Todo App</h1>
      <hr />

      <ul>
        <li> Item 1</li>
        <li> Item 2</li>
        <li> Item 3</li>
      </ul>
    </>
  );

  return component;
};
