import React from 'react';
import ExapleTwo from "../../Example/ExapleTwo";
import Counter from "../../Counter/Counter";

const ExampleTwos = ({history}) => {
    return (
        <div>
            {/*history свойства route*/}
            <ExapleTwo history={history}/>

            <Counter/>
        </div>
    );
};

export default ExampleTwos;
