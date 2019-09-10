import React, { useReducer } from 'react';
import './App.css';
import { initialState, todoReducer } from './reducers/todoReducer';


function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    state.todoArray.map(
      element => <div key={element.id} onClick={() => dispatch({type:'TOGGLE_CLASSNAME', payload:element.id})}>
                      {element.item}
                  </div>
    )
  );
}

export default App;
