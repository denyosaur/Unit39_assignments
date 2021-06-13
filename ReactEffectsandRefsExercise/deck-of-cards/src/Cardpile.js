import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cardpile = ({ pile }) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards(pile.map(card => {
            return <Card image={card.image} key={card.code} />
        }))
    }, [pile])

    return <div className="Cardpile">
        <div className="Cardpile-cards">
            {(cards.length > 0) && cards}
        </div>
    </div>
}

export default Cardpile;