import { useState, useReducer } from 'react';
import '../App.css';

const initialState = {
    todos: [],
    newTodo: '',
};

function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    { todo: action.payload, complete: false },
                    ...state.todos,
                ],
                newTodo: '',
            };
        case 'UPDATE':
            return {
                ...state,
                newTodo: action.payload,
            };
        default:
            return state;
    }
}

function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const { todos, newTodo } = state;

    const handleInputChange = (event) => {
        dispatch({ type: 'UPDATE', payload: event.target.value });
    };

    const handleAdd = () => {
        if (newTodo.trim() !== '') {
            dispatch({ type: 'ADD', payload: newTodo });
        }
    };

    return (
        <div className="todo-list">
            <h1>Create Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                placeholder="Add task"
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
