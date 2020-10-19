import React from 'react';

const CarDetail = (props) => {
    return (
        <div style={{textAlign:'center'}}>
            <h1>Название машины - {props.match.params.name}</h1>
            <h2>Год - {props.match.params.year}</h2>
        </div>
    );
};

export default CarDetail;
