import React from 'react';
import Exaple from "../../Example/Exaple";

const ExampleOne = () => {
    return (
        <div>
            <h1>Пример один</h1>

            <Exaple name={'Audi'} year={'1994'}/>

            <Exaple name={'Audi'} year={'1994'}>
                <p>This is CHILDREN for component</p>
            </Exaple>
        </div>
    );
};

export default ExampleOne;
