import React, {Component} from 'react';
import redCup from './images/slack.png';


class Cup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.number
        }
    }



    render() {
        return (
            <div>
                <img className={`cup ${this.props.className}`} onClick={this.compareValues} src={redCup}/>
            </div>
        )
    }
}

export default Cup