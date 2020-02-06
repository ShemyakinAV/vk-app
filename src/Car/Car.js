import React from 'react';
import Radium from "radium";
import App from "../App";
import PropTypes from 'prop-types'
import "./car.css"

const Car = (props) => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 5px 0 rgba(0,0,0,.25)',
        }
    }



    return (
        <div className="Car" style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: {props.year}</p>
            <input
                type="text"
                   onChange={props.onChangeName}
                   value={props.name}
                   className={inputClasses.join(' ')
                   }
            />
            <button
                onClick={props.onDelete}
            >Delete!</button>
        </div>
    )
}
Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}
export default Radium(Car)