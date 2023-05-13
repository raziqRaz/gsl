
//App.js File
import React, { useState } from 'react';
import { MainContainer } from '../content/content.element';
  
const Sample = (props) => {
    const [change, setChange] = useState(true);
    return (
        <MainContainer active={props.toggle}>
        <div>
            <button onClick={() => setChange(!change)}>
                Click Here!
            </button>
            {change ? <h1>Welcome to GeeksforGeeks</h1> :
                <h1>A Computer Science Portal for Geeks</h1>}
        </div>
        </MainContainer>
    );
}
export default Sample