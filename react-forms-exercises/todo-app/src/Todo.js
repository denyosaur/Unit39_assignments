import React from "react";

const Todo = ({ task, deleteTodo }) => {
    const handleDelete = (evt) => {
        evt.preventDefault();
        deleteTodo();
    }

    return <div className="Todo">
        <span className="Todo-task">{task}</span>
        <button className="Todo-delete" onClick={handleDelete}>X</button>
    </div>

}

export default Todo;