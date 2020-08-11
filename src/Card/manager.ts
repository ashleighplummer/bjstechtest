import Task from "../Task/manager";
import User from "../User";

class CardManager {
    private tasks: Task[];
    private readonly user: User;

    constructor(tasks: Task[], user: User){
        this.tasks = tasks;
        this.user = user;
    }

    addTask(title: string, description:string) {
        // Sort how the position is initialised.
        let task = new Task(title, this.tasks.length, description, this.user, this.user);
        this.tasks.push(task);
        window.localStorage.setItem("Tasks", JSON.stringify(this.tasks));
        return task;
    }

    removeTask(task: Task){

    }

}

export default CardManager;