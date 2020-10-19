import React, {Component} from 'react';
import {Route, Switch, Redirect, NavLink} from "react-router-dom";
import ExampleOne from "./Components/ExampleLinks/ExampleOne/ExampleOne";
import ExampleTwos from "./Components/ExampleLinks/ExampleTwo/ExampleTwos";
import CarDetail from "./Components/CarDetail/CarDetail";

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogined: false
        }
    }

    render() {
        return (
            <div style={{width: '95%', margin: 'auto'}}>

                {/*меню для страниц*/}
                <nav className='menu'>
                    <ul>
                        <li><NavLink to='/' exact>Example 1</NavLink></li>
                        {
                            this.state.isLogined
                                ?<li><NavLink to='/example-two'>Example 2</NavLink></li>
                                :<span>Not LOGIN</span>
                        }
                        {/*определенные параметры где ?-параметры запроса и hash - якорь к элементу*/}
                        <li><NavLink to={{
                            pathname: '/example-three',
                            search: '?a=1&b=2',
                            hash: 'wp-hash'
                        }}>Example 3</NavLink></li>
                    </ul>
                </nav>

                <hr/>

                {/*кнопка для логина или разлогина*/}
                <h2>Login is {this.state.isLogined? 'True' : 'False'}</h2>
                <button onClick={() => this.setState({
                    isLogined: !this.state.isLogined
                })}>Login</button>

                <Switch>
                    {/*пути для ссылок меню*/}
                    <Route path='/' exact render={() => <ExampleOne/>}/>

                    {
                        this.state.isLogined
                            ?<Route path='/example-two' exact component={ExampleTwos}/>
                            :null
                    }
                    {/*детальная информация по машине, клик по элементу машина*/}
                    <Route path='/car/:name/:year' exact component={CarDetail}/>

                    {/*ИЛИ REDIRECT ИЛИ 404*/}
                    {/*redirect если не найдена страница*/}
                    <Redirect to={'/'}/>
                    {/*страница 404 - должен идти последним*/}
                    <Route render={() => (<h1>404 ОШИБКА!!!!</h1>)}/>
                </Switch>
            </div>
        );
    }


}

export default App;
