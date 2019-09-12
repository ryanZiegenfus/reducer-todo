import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/todoList';
import TodoInput from './components/todoInput';
import { todoReducer, initialState } from './reducers/todoReducer';


function App() {

const [state, dispatch]=useReducer(todoReducer, initialState);


  return (
    <div>
      <TodoList state={state} dispatch={dispatch}/>
      <TodoInput dispatch={dispatch}/>
    </div>

  );
}

export default App;
