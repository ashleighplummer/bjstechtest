import User from "../User"
import React, { useState } from 'react';
import styles from './task.module.scss';
import Comment from "../User/comments";

interface TaskConfig {
    title: string;
    position: number;
    description?: string;
    createdBy: User;
    assignedTo: User;
    comments?: Comment[]
    onClick(): any;
}

const Task = (props: TaskConfig) => {
    const [title, setTitle] = useState(props.title);
    const [position, setPosition] = useState(props.position);
    const [description, setDescription] = useState(props.description);
    const [createdBy, setCreatedBy] = useState(props.createdBy);
    const [assignedTo, setAssignedTo] = useState(props.assignedTo);
    const [comments, setComments] = useState(props.comments);

    return (
        <div className={styles.task} onClick={props.onClick} draggable={true}>
            <p>{title}</p>
        </div>
    )
};

export default Task;