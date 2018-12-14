import React, {Component} from 'react';
import Button from './button'
import './board.css'

import redCup from './images/slack.png';

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value : null
        }

    }



    render() {
        return(
            <div className="board">
                <img style={} className={`pic3`} src={ redCup }/>
                <img className={`pic1`} src={ redCup }/>
                <img className={`pic2`} src={ redCup }/>
                <input className={`input`} placeholder={`guess`}></input>
                <Button name="submit" text={`submit`}/>
                <Button name="reset" text={`reset`}/>
            </div>

        )
    }

}

export default Board