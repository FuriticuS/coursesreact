import React from 'react';

const Exaple = ({name, year,children}) => {

    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <p>Сумма чисел 1 + 1 = {1+1}</p>
            <p>Рандомное число:{Math.round(Math.random()*100)}</p>

            {/*свойства с помощью props*/}
            <p>Имя машины: {name}</p>
            <p>Год машины: {year}</p>

            {/*передача всего что лежит в теге компоненты в компоненте родителя*/}
            {children}
        </div>

    );
};

export default Exaple;
