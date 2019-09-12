import React, {useState} from 'react';
import '../App.css';


export default function TodoInput (props) {

    const [stateText, setStateText] = useState("");
    
    const handleChange = (event) => {
        setStateText(event.target.value);
    }


    const submitChange = (event) => {
        event.preventDefault();
        props.dispatch({type:"SUBMIT_TEXT", payload:{stateText:stateText, timeStamp:(event.timeStamp)}});
        setStateText('')
        console.log(props.state)
    }


    const clearChange = () => {
        props.dispatch({type:"DELETE_TASK"});
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