import React, {useEffect, useState} from 'react';
import './App.scss';
import CardManager from "./Card/manager";
import Card from "./Card";
import CardModel from "./Card/model";
import TaskModel from "./Task/model";

function App() {
    const user = {id:1, name:"Ashleigh Plummer", email:"ashleigh@sportseasy.co.uk"};
    const [createCardButton, setCreateCardButton] = useState(false);
    const [cardManager, setCardManager] = useState(new CardManager(user));

    useEffect(() => {

    }, cardManager.cards);

    const cardOnClick = (position: number) => {

    };

    const taskFormSubmission = (position: number, task: TaskModel) => {
        console.log("task form submission");
        cardManager.cards[position].addTask(task);
    };

    const newCard = () => {
        console.log("new Card");
        setCreateCardButton(!createCardButton);
        cardManager.addCard(new CardModel("", cardManager.cards.length, user, [], []));
    };

    const renderCards = () => {
        let cards = cardManager.cards.map( card => {
            return <Card title={card.title} position={card.position} createdBy={card.createdBy} members={card.members} tasks={card.tasks} taskFormSubmission={taskFormSubmission}/>
        });
        return cards;
    };

    return (
          <div className="App">
              { renderCards() }
              <button onClick={() => newCard()}>Create Card</button>
          </div>
    );
}

export default App;
