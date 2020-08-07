import User from "../User"
import React, { useState } from 'react';
import styles from './task.module.scss';

interface TaskConfig {
    title: string;
    position: number;
    description?: string;
    createdBy: User;
    assignedTo: User;
    onClick(): any;
}

const Task = (props: TaskConfig) => {
    const [title, setTitle] = useState(props.title);
    const [position, setPosition] = useState(props.position);
    const [description, setDescription] = useState(props.description);
    const [createdBy, setCreatedBy] = useState(props.createdBy);
    const [assignedTo, setAssignedTo] = useState(props.assignedTo);

    return (
        <div className={styles.task} onClick={props.onClick} draggable={true}>
            <p>{title}</p>
        </div>
    )
};

export default Task;