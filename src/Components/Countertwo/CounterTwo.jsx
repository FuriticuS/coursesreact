import React from 'react';
import {clickedContext} from '../Counter/Counter';

const CounterTwo = ({clicked}) => {
    return (
        <div style={{border: "1px solid #ccc", width: '200px'}}>
            <h3>Counter Two</h3>
            <clickedContext.Consumer>
                {/*clicked - это функция call-back с provider*/}
                {clicked => clicked ? <p>Clicked</p> : null}
            </clickedContext.Consumer>
        </div>
    );
};

export default CounterTwo;
