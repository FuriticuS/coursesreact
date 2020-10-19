import React, {Component} from 'react';
import Car from "../Car/Car";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class ExapleTwo extends Component {

    constructor(props) {
        super(props);
        // все данные для компоненты лежат в State
        this.state = {
            cars: [
                {name: 'VW', year: 2011},
                {name: 'Opel', year: 1985},
                {name: 'Reno', year: 2005}
            ],
            pageTitle: 'Пример два',
            showCars: false
        }
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

    // функция для отображения машин
    chowCars = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    // функция для изменения имени машины
    newNameCar = (name, index) => {
        // находим нужный элемент по номеру index
        const car = this.state.cars[index];
        car.name = name;

        // делаем клон нашего массива с помощью concat() или с помощью [...]
        const cars = [...this.state.cars];
        cars[index] = car;

        //изменяем состояние state и добавляем новый массив
        this.setState({
            cars: cars
        })
    }

    // функция для удаления машины
    deleteCars = (index) => {
        // делаем клон нашего массива с помощью concat() или с помощью [...]
        const car = [...this.state.cars];
        car.splice(index, 1);

        //изменяем состояние state и добавляем новый массив
        this.setState({
            cars: car
        })
    }

    // функция для возврата на главную страницу где history свойства route
    goToHomePage = () => {
        this.props.history.push({
            pathname: '/'
        });
    }

    render() {

        const cars = this.state.cars;

        return (
            <div style={{marginBottom: '50px', display:'flex', flexDirection: 'column'}}>

                <h1>{this.state.pageTitle}</h1>

                {/*кнопка для возврата на главную*/}
                <button onClick={this.goToHomePage} style={{width:'200px'}}>Home</button>

                {this.state.showCars &&
                cars.map((item, index) => {

                    return (
                        <ErrorBoundary key={index}>
                            <Car
                                index={index}
                                newNameCar={(event) => this.newNameCar(event.target.value, index)}
                                deleteCars={this.deleteCars.bind(this, index)}
                                name={item.name}
                                year={item.year}
                            />
                        </ErrorBoundary>
                    )
                })
                }

                {/*изменение названия примера*/}
                <div>
                    <input type="text" onChange={this.handleInput}/>
                    <button onClick={this.changeTitle.bind(this, 'Изменение названия')}>Change title</button>

                    {/*отображение блока машин*/}
                    <button onClick={this.chowCars}>{!this.state.showCars ? 'Show cars' : 'Hide cars'}</button>
                </div>
            </div>
        );
    }
};

export default ExapleTwo;
