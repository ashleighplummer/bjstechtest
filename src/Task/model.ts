import User from "../User";

class TaskModel {
    private _title: string;
    private _position: number;
    private _description: string;
    private _createdBy: User;
    private _assignedTo: User;

    constructor(title: string, position: number, description: string, createdBy: User, assignedTo: User) {
        this._title = title;
        this._position = position;
        this._description = description;
        this._createdBy = createdBy;
        this._assignedTo = assignedTo;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get createdBy(): User {
        return this._createdBy;
    }

    set createdBy(value: User) {
        this._createdBy = value;
    }

    get assignedTo(): User {
        return this._assignedTo;
    }

    set assignedTo(value: User) {
        this._assignedTo = value;
    }
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }


}

export default TaskModel;