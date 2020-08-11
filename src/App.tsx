import React, {useState} from 'react';
import './App.scss';
import CardManager from "./Card/manager";
import TaskModel from "./Task/model";
import Card from "./Card";
import Task from './Task';

function App() {

    const [addTaskButton, setAddTaskButton] = useState(false);

    const openFullTaskDetails = () => {
        return 1;
    };



     const renderTask = () => {
        return <Task title="Added Task"
              position={1}
              description="First task ever to be added!"
              createdBy={{id:1, name:"Ashleigh Plummer", email:"ashleigh@sportseasy.co.uk"}}
              assignedTo={{id:1, name:"Ashleigh Plummer", email:"ashleigh@sportseasy.co.uk"}}
              onClick={openFullTaskDetails}
        />
    };

    return (
          <div className="App">
              <button onClick={() => setAddTaskButton(true)}>addTask</button>
          </div>
    );
}

export default App;
