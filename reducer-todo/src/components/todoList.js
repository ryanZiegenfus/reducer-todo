import React from 'react';
import '../App.css';

const TodoList = (props) => {


    const classNameChange = (event) => {
        let val = event.target.classList.value
        props.dispatch({type:'TOGGLE_CLASSNAME', payload: val});
    }
    
    console.log(props.state.todoArray)
 
    return (
        props.state.todoArray.map(
            element => {return (<div key={element.id} onClick={classNameChange} className={element.id}>
                {element.item}
            </div>)}
          )
    );
}

export default TodoList