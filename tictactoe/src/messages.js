import React, {Component} from 'react'
import './message.css'

class Message extends Component {
    constructor(props) {
        super(props);
    }

    makeWinDiv = () => {
        return (
            <div>
                <div>{this.props.message}</div>
            </div>
        )
    };

    render() {
        const winDiv = this.makeWinDiv();
        return (
            <div className={this.props.className}>{winDiv}</div>
        )
    }

}

export default Message