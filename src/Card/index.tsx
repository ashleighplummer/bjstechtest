import React, {useEffect, useState} from 'react';
import styles from './card.module.scss';
import TaskForm from "../Task/taskForm";
import User from "../User";
import TaskModel from "../Task/model";
import Task from "../Task";

interface CardConfig {
    title: string;
    position: number;
    createdBy: User;
    members?: User[];
    tasks?: TaskModel[];
    taskFormSubmission: (cardPosition: number, task: TaskModel) => void;
}

const Card = (props: CardConfig) => {

    const [title, setTitle] = useState(props.title);
    const [position, setPosition] = useState(props.position);
    const [createdBy, setCreatedBy] = useState(props.createdBy);
    const [members, setMembers] = useState(props.members);
    const [tasks, setTasks] = useState(props.tasks);
    const [cardKey, setCardKey] = useState(0);

    const [addTaskButton, setAddTaskButton] = useState(false);

    useEffect(() => {
        setCardKey((cardKey+1));
    }, tasks);

    const addTask = () => {

    };

    const renderTasks = () => {
        if (tasks) {
            let taskList = tasks.map( task => {
                return <Task
                    title={task.title}
                    position={task.position}
                    description={task.description}
                    createdBy={task.createdBy}
                    assignedTo={task.assignedTo}
                    comments={task.comments}
                    onClick={openTaskDetails}
                />
            });
            return taskList;
        };
    };

    const openTaskDetails = () => {
        return 1;
    };

    return (
        <div className={styles.card} key={cardKey} >
            {renderTasks()}
            {addTaskButton ? <TaskForm user={createdBy} taskFormSubmission={props.taskFormSubmission} cardPosition={position}/> : null}
            <button onClick={() => setAddTaskButton(!addTaskButton)}>{addTaskButton ? "Close addTask" : "addTask"}</button>
        </div>
    );
};

export default Card;