import React, {useState} from 'react';
import './App.css';

function TodoInput () {

    const [stateText, setStateText] = useState();


    return(
        <form>
            <input type="text" placeholder="What do you need to do?" value={stateText} onChange={setStateText()}/>
        </form>
    )
}