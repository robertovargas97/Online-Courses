import './styles.css';

import { Todo, TodoList } from './js/classes';
import { createTaskHtml } from './js/components';



export const tasksList = new TodoList();

tasksList.tasksList.forEach(task => createTaskHtml(task));

console.log(tasksList.tasksList);






