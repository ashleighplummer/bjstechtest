import Task from ".";
import User from "../User";

class CardManager {
    private tasks: Task[];
    private user: User;

    constructor(tasks: Task[], user: User){
        this.tasks = tasks;
        this.user = user;
    }

    addTask(title: string, description?:string) {
        let task = Task()
        return title;
    }

}

export default CardManager;