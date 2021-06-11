import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import uuid from 'react-uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([{ id: uuid(), task: "eat food" }]);

    const createTodo = (newTodo) => {
        setTodos([...todos, { id: uuid(), task: newTodo }]);
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }));
    };

    return <div className="TodoList">
        <div><NewTodoForm createTodo={createTodo} /></div>
        <div>
            {todos.map(todo => {
                return <Todo task={todo.task} deleteTodo={() => deleteTodo(todo.id)} key={todo.id} />
            })}
        </div>
    </div>
}

export default TodoList;