import React, {Component, createContext} from 'react';
import CounterTwo from "../Countertwo/CounterTwo";

//CONTEXT для компоненты countertwo
export const clickedContext = createContext(false);

class Counter extends Component{

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            clicked: false
        }
    }
    // правильное обращение к состоянию state
    addCounter = () => {
        this.setState(() => {
            const newCount = this.state.counter + 1;
            return {
                counter: newCount
            }
        });
    }

    // правильное обращение к состоянию state
    deletedCounter = () => {
        this.setState(() => {
            const newCount = this.state.counter - 1;
            return {
                counter: newCount
            }
        });
    }

    render() {
        return (
            <div style={{marginBottom:'20px'}}>
                <h2>Counter: {this.state.counter}</h2>

                {/*provider для CounterTwo*/}
                <clickedContext.Provider value={this.state.clicked}>
                    <CounterTwo />
                </clickedContext.Provider>

                <button onClick={()=>{this.setState({clicked: true})}} >Change click</button>

                <button onClick={this.addCounter}>+</button>
                <button onClick={this.deletedCounter}>-</button>
            </div>
        );
    }
}

export default Counter;
