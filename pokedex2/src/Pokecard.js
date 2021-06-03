import React from "react";
import './Pokecard.css';

const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <h4 className="Pokecard-title">{props.name}</h4>
            <div className="Pokecard-img"><img src={props.img} alt=""></img></div>
            <p className="Pokecard-type">Type: {props.type}</p>
            <p className="Pokecard-exp">EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard