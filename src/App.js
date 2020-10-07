import React from 'react';
import './App.css';
import Exaple from "./Components/Example/Exaple";
import ExapleTwo from "./Components/Example/ExapleTwo";
import Counter from "./Components/Counter/Counter";

const App = () => {
    return (
        <div style={{width: '95%', margin:'auto'}}>
            <h1>Пример один</h1>

            <Exaple name={'Audi'} year={'1994'}/>

            <Exaple name={'Audi'} year={'1994'}>
                <p>This is CHILDREN for component</p>
            </Exaple>

            <ExapleTwo />

            <Counter/>
        </div>
    );
}

export default App;
