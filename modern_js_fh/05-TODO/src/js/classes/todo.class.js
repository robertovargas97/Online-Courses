export class Todo {

    static fromJson({ task, id, completed, created }) {

        const tempTask = new Todo(task);
        tempTask.id = id;
        tempTask.completed = completed;
        tempTask.created = created;
        return tempTask;
    }

    constructor(task) {
        this.task = task;
        this.id = new Date().getTime();
        this.completed = false;
        this.created = new Date();
    }

    printClass() {
        console.log("DAMNS");
    }

}