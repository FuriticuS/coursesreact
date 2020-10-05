import React from 'react';
import './App.css';
import Exaple from "./Components/Example/Exaple";
import ExapleTwo from "./Components/Example/ExapleTwo";

const App = () => {
    return (
        <div>
            <h1>Пример один</h1>

            <Exaple name={'Audi'} year={'1994'}/>

            <Exaple name={'Audi'} year={'1994'}>
                <p>This is CHILDREN for component</p>
            </Exaple>

            <ExapleTwo />
        </div>
    );
}

export default App;
