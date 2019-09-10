import React, { useReducer } from 'react';
import '../App.css';
import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)
    const toggleClassName = () => {

    }

    return (
 
    );
}

export default TodoList