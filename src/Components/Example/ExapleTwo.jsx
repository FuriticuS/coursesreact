import React, {Component} from 'react';
import Car from "../Car/Car";

class ExapleTwo extends Component{

    // все данные для компоненты лежат в State
    state = {
        cars: [
            { name: 'VW', year: 2011 },
            { name: 'Opel', year: 1985 },
            { name: 'Reno', year: 2005 }
        ],
        pageTitle: 'Пример два'
    }

    // функция для работы с внутренним state - изменение имени
    changeTitle = (title) => {
        this.setState({pageTitle: title});
    }

    // функция для работы с внутренним state - изменение имени при вводе в поле input
    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {

        const cars = this.state.cars;

        return (
            <div>

                <h1>{this.state.pageTitle}</h1>

                {
                    cars.map((item, index) => {

                        return (
                            <Car key={index} newNameCar={() => this.changeTitle(item.name)} name={item.name} year={item.year} />
                            )
                    })
                }

                {/*изменение названия примера*/}
                <input type="text" onChange={this.handleInput}/>
                <button onClick={this.changeTitle.bind(this, 'Изменение названия')}>Change title</button>

            </div>
        );
    }
};

export default ExapleTwo;
