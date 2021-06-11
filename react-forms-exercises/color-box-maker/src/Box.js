import React from "react";

const Box = ({ height, width, backgroundColor, deleteBox }) => {
    const boxStyle = {
        backgroundColor: backgroundColor,
        height: `${height}px`,
        width: `${width}px`
    }

    return <div style={boxStyle}>
        <button onClick={deleteBox}>X</button>
    </div >
}

export default Box;