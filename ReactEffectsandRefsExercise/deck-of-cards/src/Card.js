import React from "react";
import "./Card.css"

const Card = ({ image }) => {
    const randNum = Math.floor(Math.random() * 45);
    const style = { transform: `rotate(${randNum}deg)` }

    return <div className="Card">
        <img src={image} alt="" style={style} />
    </div>
}

export default Card;