import React, { useState } from "react";
import "./eightball.css"

const Eightball = (props) => {
    const answers = props.answers;
    const random = () => Math.floor(Math.random() * answers.length);

    const clickBall = () => {
        const { msg, color } = answers[random()];
        changeMsg(msg)
        changeColor(color)
    }
    const reset = () => {
        changeMsg("Think of a Question")
        changeColor("black")
    }

    const [msg, changeMsg] = useState("Think of a Question");
    const [color, changeColor] = useState("black");


    return (
        <>
            <div className="Eightball" onClick={clickBall}>
                <div className={color}>
                    <p className="Eightball-text">{msg}</p>
                </div>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Eightball;