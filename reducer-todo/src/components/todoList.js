import React, { useReducer } from 'react';
import '../App.css';
import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)


    // const classNameChange = (event) => {
        console.log(state.todoArray)
    //     dispatch({type:'TOGGLE_CLASSNAME', payload:event.target.classList.value});
    //     console.log(event.target.classList.value)
    //  }
    
    return (
        state.todoArray.map(
            element => <div key={element.id} onClick={() => {""}} className={element.id}>
                            {element.item}
                        </div>
                        
          )
    );
}

export default TodoList