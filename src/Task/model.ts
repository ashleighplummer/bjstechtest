import User from "../User";
import Comment from "../User/comments";

class TaskModel {
    private _title: string;
    private _position: number;
    private _description: string;
    private _createdBy: User;
    private _assignedTo: User;
    private _comments: Comment[];

    constructor(title: string, position: number, createdBy: User, description: string = "", comments = []) {
        this._title = title;
        this._position = position;
        this._description = description;
        this._createdBy = createdBy;
        this._assignedTo = createdBy;
        this._comments = comments;
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

    get comments(): Comment[] {
        return this._comments;
    }

    set comments(value: Comment[]) {
        this._comments = value;
    }
}

export default TaskModel;