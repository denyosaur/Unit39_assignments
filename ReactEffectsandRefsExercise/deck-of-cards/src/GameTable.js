import React, { useState, useEffect } from "react";
import Cardpile from "./Cardpile";
import DrawCardButton from "./DrawCardButton";
import './GameTable.css';
import axios from "axios";

const createDeckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

const GameTable = () => {
    const [pile, setPile] = useState([]);
    const [deckId, setDeckId] = useState();

    useEffect(() => {
        async function Deck() {
            const res = await axios.get(createDeckUrl);
            setDeckId(res.data.deck_id)
        }
        Deck();
    }, []);

    const drawCard = async () => {
        const drawUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
        const res = await axios.get(drawUrl);
        console.log(pile.length)
        setPile([...pile, res.data.cards[0]]);
    }


    return <div className="Cardpile">
        <div className="Cardpile-draw">
            <DrawCardButton drawCard={drawCard} number={pile.length} />
        </div>
        <div className="Cardpile-pile">
            <Cardpile pile={pile} />
        </div>
    </div>
}

export default GameTable;