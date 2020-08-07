import React from 'react';
import './App.scss';
import Task from './Task';

function App() {

  const openFullTaskDetails = () => {
    return 1;
  };

  return (
      <div className="App">
        <Task title="Added Task"
              position={1}
              description="First task ever to be added!"
              createdBy={{id:1, name:"Ashleigh Plummer", email:"ashleigh@sportseasy.co.uk"}}
              assignedTo={{id:1, name:"Ashleigh Plummer", email:"ashleigh@sportseasy.co.uk"}}
              onClick={openFullTaskDetails}
        />
      </div>
  );
}

export default App;
