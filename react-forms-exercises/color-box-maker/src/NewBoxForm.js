import React, { useState } from "react";

const NewBoxForm = ({ createBox }) => {
    const INITIAL_STATE = {
        height: "",
        width: "",
        color: "#000000"
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (evt) => {
        evt.preventDefault();
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createBox(formData.height, formData.width, formData.color);
        setFormData(INITIAL_STATE);
    };

    return <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height:</label>
        <input name="height" type="number" placeholder="Enter Height Number" onChange={handleChange} value={formData.height} />

        <label htmlFor="width">Width: </label>
        <input name="width" type="number" placeholder="Enter Width Number" onChange={handleChange} value={formData.width} />

        <label htmlFor="color">Color: </label>
        <input name="color" type="color" placeholder="Enter Color" onChange={handleChange} value={formData.color} />

        <button>Create</button>
    </form>


};

export default NewBoxForm;