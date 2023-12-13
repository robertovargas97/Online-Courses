import { Todo } from "./TodoApp";

type TodoAction = {
  type: string;
  payload: Todo;
};

export const todoReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case "[TODO]":
      throw new Error(" Not implemented yet");

    default:
      break;
  }

  return state;
};
