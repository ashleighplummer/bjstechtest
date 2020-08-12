import React, {useState} from 'react';
import User from "../User";
import TaskModel from "./model";
import styles from './taskForm.module.scss';

interface TaskFormProps {
    user: User;
    cardPosition: number;
    taskFormSubmission: (cardPosition: number, task: TaskModel) => void;
}

const TaskForm = (props: TaskFormProps) => {

    const [title, setTitle] = useState("");
    const [position, setPosition] = useState(0);
    const [description, setDescription] = useState("");
    const [createdBy, setCreatedBy] = useState(props.user);
    const [assignedTo, setAssignedTo] = useState("");

    const taskCreate =  () => {
        console.log("task creation");
        props.taskFormSubmission(props.cardPosition, new TaskModel(title, position, createdBy, description, []));
    }

    return (
        <div className={styles.container}>
            <form className={styles.taskForm}>
                <input className={styles.input} type="text" name="title" onChange={e => setTitle(e.target.value)} placeholder="title"/>
                <textarea className={styles.input} name="description" onChange={e => setDescription(e.target.value)}  placeholder="description"/>
                <input className={styles.input} type="number" name="position" onChange={e => setTitle(e.target.value)} placeholder="position"/>
                <input className={styles.input} type="email" name="email" onChange={e => setAssignedTo(e.target.value)} placeholder="email"/>
                <button className={styles.input} onClick={() => taskCreate()}>Create New Task</button>
            </form>
        </div>
    )

};

export default TaskForm;