import React, {useState, useReducer} from 'react';
import '../App.css';
import { todoReducer, initialState } from '../reducers/todoReducer';

export default function TodoInput () {

    const [stateText, setStateText] = useState("");
    
    const [state, dispatch]=useReducer(todoReducer, initialState);


    const handleChange = (event) => {
        setStateText(event.target.value);
      }


    const submitChange = (event) => {
        event.preventDefault();
        dispatch({type:"SUBMIT_TEXT", payload:{stateText:stateText, timeStamp:(event.timeStamp)}});
        setStateText('')
        console.log(state.todoArray)
    }


    const clearChange = () => {
        dispatch({type:"DELETE_TASK"});
    }


    return(
        <form onSubmit={submitChange}>
            <input type="text" placeholder="What do you need to do?" value={stateText} onChange={ event => handleChange(event)}/>
            <button type="submit">
                Add Task
            </button>
            <button type="button" onClick={clearChange}>
                Clear Completed Tesks
            </button>
        </form>
    )
}