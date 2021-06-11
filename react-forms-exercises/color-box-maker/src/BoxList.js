import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import uuid from 'react-uuid'

const BoxList = () => {
    const [boxes, setBoxes] = useState([{
        width: 100,
        height: 100,
        backgroundColor: "black",
        id: uuid()
    }]);
    const createBox = (height, width, backgroundColor) => {
        setBoxes(
            [...boxes, { height, width, backgroundColor, id: uuid() }]
        )
    };
    const deleteBox = (key) => {
        setBoxes(
            boxes.filter(box => {
                return box.id !== key
            })
        )
    };

    return <div className="BoxList">
        <div className="BoxList-form">
            <NewBoxForm createBox={createBox} />
        </div>
        <div className="BoxList-boxes">
            {
                boxes.map(box => {
                    return <Box key={box.id} height={box.height} width={box.height} backgroundColor={box.backgroundColor} deleteBox={() => deleteBox(box.id)} />
                })}
        </div>

    </div>

}

export default BoxList;