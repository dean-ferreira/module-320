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
        case 'TOGGLE':
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload
                        ? { ...todo, complete: !todo.complete }
                        : todo
                ),
            };
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter(
                    (todo, index) => index !== action.payload
                ),
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

    const handleToggle = (index) => {
        dispatch({ type: 'TOGGLE', payload: index });
    };

    const handleDelete = (index) => {
        dispatch({ type: 'DELETE', payload: index });
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
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleToggle(index)}
                        />
                        {todo.todo}
                        <button
                            onClick={() => handleDelete(index)}
                            disabled={!todo.complete}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
