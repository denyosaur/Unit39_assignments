import React from "react";
import "./DrawCardButton.css";

const DrawCardButton = ({ drawCard, number }) => {
    return <div className="DrawCardButton">
        {(number < 52) && <button className="DrawCardButton-btn" onClick={() => drawCard()}>Draw!</button>}
        {(number === 52) && <div>Error: no cards remaining!</div>}
    </div>
};

export default DrawCardButton;