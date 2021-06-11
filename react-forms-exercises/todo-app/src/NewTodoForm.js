import React, { useState } from "react";

const NewTodoForm = ({ createTodo }) => {
    const [formData, setFormData] = useState("")
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({ ...handleChange, [name]: value })
    }
    const handleCreate = (evt) => {
        evt.preventDefault();
        createTodo(formData.task);
    };

    return <div className="NewTodoForm">
        <form>
            <label htmlFor="task">Task: </label>
            <input type="text" placeholder="Enter Task Here" name="task" onChange={handleChange} value={formData.value} />
            <button onClick={handleCreate}>Submit</button>
        </form>
    </div>
};

export default NewTodoForm;