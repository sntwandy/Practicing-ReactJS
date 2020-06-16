import React from 'react';

const HelloWorld = () => {
    const Hello = 'Hello World!!';
    const isTrue = false;

    return(
        <div className="HelloWorld">
            <h1>{Hello}</h1>
            <h2>Basic course of React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
                {isTrue ? <h4>This is true</h4> : <h5>This is false</h5>}
                {isTrue && <h4>I'm True</h4>}
        </div>
    );
};

export default HelloWorld;