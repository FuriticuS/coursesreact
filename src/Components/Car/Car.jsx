import React, {useImperativeHandle, useRef} from 'react';
import Radium from "radium";
import {withRouter} from "react-router-dom";

import './car.scss';

const Car = ({ name, year, newNameCar, deleteCars, ref, history}) => {

    const inputClass = [];

    if (name) {
        inputClass.push('green');
    }

    else {
        inputClass.push('red');
    }

    if (name.length > 4) {
        inputClass.push('blue');
    }

    // RADIUM это HOC для компоненты Car
    const styleRadium = {
       ':hover': {
           cursor: 'pointer',
           border: '1px solid #aaa',
           borderRadius: '10px',
           boxShadow: '0 4px 5px 0 rgba(0,0,0,.25)'
       }
    }

    // ref для фокуса на инпуте элемента
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return (
        //onClick - перейдет на страницу по названию машины, где history приходит в props
        <div className="car" style={styleRadium} onClick={() => history.push('/car/'+name.toLowerCase()+'/'+year)}>
            <h2>Название машины: {name}</h2>
            <p>Год выпуска: {year}</p>

            {/*работа с состояниями блока*/}
            <input
                ref={inputRef}
                className={inputClass.join(' ')}
                onChange={newNameCar}
                type="text"
                placeholder={name}
                value={name}
            />
            <button onClick={deleteCars}>Удалить машину</button>
        </div>
    );
};

// RADIUM это HOC для компоненты Car
export default withRouter(Radium(Car));
