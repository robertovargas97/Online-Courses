import { Todo } from "./classes";
import { tasksList } from '../index';

//HTML References
const divTodoList = document.querySelector('.todo-list');
const inputTask = document.querySelector('.new-todo');
const deletedCompleted = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const filtersA = document.querySelectorAll('.filtro');

export const createTaskHtml = (task) => {

    const htmlTask = `
        <li class="${(task.completed) ? 'completed' : ''}" data-id="${task.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(task.completed) ? 'checked' : ''}>
            <label>${task.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li> `;

    const div = document.createElement('div');
    div.innerHTML = htmlTask;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
};


//Events

inputTask.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && inputTask.value.length > 0) {
        const newTask = new Todo(inputTask.value);
        tasksList.addNewTask(newTask);
        createTaskHtml(newTask);
        inputTask.value = "";
    }


});

divTodoList.addEventListener('click', (event) => {

    const elementName = event.target.localName;
    const taskElement = event.target.parentElement.parentElement;
    const taskId = taskElement.getAttribute('data-id');

    if (elementName.includes('input')) {
        tasksList.changeState(taskId);
        taskElement.classList.toggle('completed');

    }
    else if (elementName.includes('button')) {
        tasksList.deleteTask(taskId);
        divTodoList.removeChild(taskElement);
    }

});

deletedCompleted.addEventListener('click', () => {
    tasksList.deleteCompletedTask();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const child = divTodoList.children[i];


        if (child.classList.contains('completed') == true) {
            divTodoList.removeChild(child);
        }

    }
});

ulFilters.addEventListener('click', (event) => {

    const filter = event.target.text;

    if (!filter) {
        return;
    }

    for (const elm of filtersA) {
        elm.classList.remove('selected');
    }

    event.target.classList.add('selected');


    for (const el of divTodoList.children) {
        el.classList.remove('hidden');
        const complete = el.classList.contains('completed');

        switch (filter) {
            case 'Pendientes':
                if (complete) {
                    el.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!complete) {
                    el.classList.add('hidden');
                }
                break;

            default:
                break;
        }
    }




});




