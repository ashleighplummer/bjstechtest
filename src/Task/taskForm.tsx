import React, {useState} from 'react';
import User from "../User";

const TaskForm = () => {

    const [title, setTitle] = useState("");
    position: number;
    description: string;
    createdBy: User;
    assignedTo: User;

    const formSubmission = () => {

    };

    return (
        <div>
            <form>
                <input type="text" name="title"/>
                <input type="text" name="description"/>
                <label>Assign to User (Enter the email of user you want to assign task to)</label> /* Can make this a tool tip later*/
                <input type="email" name="email"/>
            </form>
        </div>
    )

};