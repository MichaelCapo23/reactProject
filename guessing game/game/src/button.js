import React, {Component} from 'react';
import './button.css'

class Button extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <button className={`btn ${this.props.name}`}>{this.props.text}</button>
    }
}

export default Button