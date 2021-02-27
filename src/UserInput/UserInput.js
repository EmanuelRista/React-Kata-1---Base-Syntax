import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div>
            <input className="UserInput" type="text" onChange={props.changed} value={props.currentName}></input>
        </div>
    )  
};

export default userInput;