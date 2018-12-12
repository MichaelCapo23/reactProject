import React, {Component} from 'react';
import './restebtn.css'

class Reset extends Component {
    constructor(props) {
        super(props);
    }

    makeResetBtn = () => {
        return (
            <button className="resetBtn" onClick={this.props.resetFunction}>Reset Game</button>
        )
    };

    render() {
        const button = this.makeResetBtn();
        return (
            <div>
                {button}
            </div>
        )
    }
}

export default Reset