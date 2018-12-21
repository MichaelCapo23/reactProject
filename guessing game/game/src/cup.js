import React, {Component} from 'react';
import redCup from './images/slack.png';


class Cup extends Component {
    constructor(props) {
        super(props);
    }

    compareValues = (event) => {
        debugger;
        console.log("user guess: ", this.props.userguess);
        console.log("this.props.number: ", this.props.number);
        if(this.props.userguess === this.props.number){
            console.log("you win!");
        } else {
            console.log("wrong guess");
        }
    };

    render() {
        return (
            <div>
                <img alt={"cups"} className={`cup ${this.props.className}`} onClick={this.compareValues} src={redCup}/>
            </div>
        )
    }
}

export default Cup