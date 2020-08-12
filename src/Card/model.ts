import User from "../User";
import TaskModel from "../Task/model";

class CardModel {
    private _title: string;
    private _position: number;
    private _createdBy: User;
    private _members: User[];
    private _tasks: TaskModel[];

    constructor(title: string, position: number, createdBy: User, tasks: TaskModel[] = [], members: User[] = []) {
        this._title = title;
        this._position = position;
        this._createdBy = createdBy;
        this._members = members;
        this._tasks = tasks;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }

    get createdBy(): User {
        return this._createdBy;
    }

    set createdBy(value: User) {
        this._createdBy = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get members(): User[] {
        return this._members;
    }

    set members(value: User[]) {
        this._members = value;
    }

    set member(value: User) {
        this._members.push(value);
    }

    // get a member

    addTask(task: TaskModel) {
        try {
            this._tasks.splice(task.position, 0, task);
        } catch (error) {
            // position cannot be more than the size of the array.
            console.log(error);
            this.tasks.push(task);
        }
        return task;
    }

    removeTask(task: TaskModel){
        this._tasks.splice(task.position, 1);
    }

    get tasks(): TaskModel[] {
        return this._tasks;
    }

}

export default CardModel;