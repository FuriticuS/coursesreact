import React from 'react';
import {Route, Link} from "react-router-dom";
import ExampleOne from "./Components/ExampleLinks/ExampleOne/ExampleOne";
import ExampleTwos from "./Components/ExampleLinks/ExampleTwo/ExampleTwos";

import './App.css';

const App = () => {
    return (
        <div style={{width: '95%', margin:'auto'}}>

            <nav className='menu'>
                <ul>
                    <li><Link to='/'>Example 1</Link></li>
                    <li><Link to='/exapmle-two'>Example 2</Link></li>
                </ul>
            </nav>

            <Route path='/' exact render={()=> <ExampleOne />} />

            <Route path='/exapmle-two' exact render={()=> <ExampleTwos />} />

        </div>
    );
}

export default App;
