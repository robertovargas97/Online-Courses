import { Todo } from ".";

export class TodoList {
    constructor() {
        // this.tasksList = [];
        this.loadInLocalStorage();
    }

    addNewTask(task) {
        this.tasksList.push(task);
        this.saveInLocalStorage();
    }

    deleteTask(id) {

        this.tasksList = this.tasksList.filter(todo => todo.id != id);
        this.saveInLocalStorage();
    }

    changeState(id) {

        for (let task of this.tasksList) {
            if (id == task.id) {
                task.completed = !task.completed;
                this.saveInLocalStorage();
                break;
            }
        }
    }

    deleteCompletedTask() {
        this.tasksList = this.tasksList.filter(todo => todo.completed == false);
        this.saveInLocalStorage();
    }

    saveInLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasksList));
    }

    loadInLocalStorage() {
        this.tasksList = (localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];

        this.tasksList = this.tasksList.map(obj => Todo.fromJson(obj));
    }


} 