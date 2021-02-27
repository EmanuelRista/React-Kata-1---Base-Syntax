import React from 'react';

const userOutput = (props) => {

    const userOutputStyle = {
        backgroundColor: 'blue',
        color: 'white',
      }

    return (
        <div style={userOutputStyle}>
            <p>Hello world! I'm {props.username}</p>
            <p>This is a React training</p>
        </div>
    )  
};

export default userOutput;