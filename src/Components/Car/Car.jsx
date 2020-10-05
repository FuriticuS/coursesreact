import React from 'react';

const Car = ({name, year, newNameCar}) => {

    return (
        <div style={{border: '1px solid #000', width: '500px'}}>
            <h2>Название машины: {name}</h2>
            <p>Год выпуска: {year}</p>
            <button onClick={newNameCar}>Изменить название машины</button>
        </div>
    );
};

export default Car;
