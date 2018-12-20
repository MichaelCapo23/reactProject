import React from 'react';
import './board.css'

const Button = (props) => {
        return (
            <button onClick={props.func} className={`btn ${props.name}`}>{props.text}</button>
        )
};

export default Button