import User from "../User";
import CardModel from "./model";

class CardManager {
    private _cards: CardModel[];
    private readonly user: User;

    constructor(user: User, cards: CardModel[] = []){
        this._cards = cards;
        this.user = user;
    }

    saveToLocalStorage() {

    }

    loadFromLocalStorage() {

    }

    newCard() {}

    addCard(card: CardModel) {
        this._cards.push(card);
    }

    removeCard(card: CardModel) {
        this._cards.splice(card.position, 1);
    }

    get cards(): CardModel[] {
        return this._cards;
    }

    set cards(value: CardModel[]) {
        this._cards = value;
    }

}

export default CardManager;