import React, {Component} from 'react';
import Button from './button'
import './board.css'

import redCup from './images/slack.png';

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cupValue1 : 1,
            cupValue2 : 2,
            cupValue3 : 3,


        };
    this.setCupClass();
    }

    switchStateValues = (state1, state2) => {
        let temp = null;
        console.log("state1: ",state1);
        console.log("state2: ",state2);
        // const state1State = state1[0];
        // const state1Value = state1[1];
        // const state2State = state2[0];
        // const state3Value = state2[1];
        if(state1[0] === Object.keys(this.state)[0]){
            console.log("cv1");
        } else if(state1[0] === Object.keys(this.state)[1]) {
            console.log("cv2")
        }
        // this.setState({
        //
        // })

    };

    setCupClass() {
        let randNum = Math.floor(Math.random() * 3) + 1;
        console.log(randNum);
        let stateKeys = [];
        stateKeys = Object.keys(this.state);
        const stateArr = [[stateKeys[0], 1], [stateKeys[1], 2], [stateKeys[2], 3]];
        if(randNum === 1) {
            const arrState = stateArr.filter(value => value[1] !== 3);
            this.switchStateValues(arrState[0], arrState[1]);
        } else if(randNum === 2) {
            const arrState = stateArr.filter(value => value[1] !== 1);
            this.switchStateValues(arrState[0], arrState[1]);
        } else {
            const arrState = stateArr.filter(value => value[1] !== 2);
            this.switchStateValues(arrState[0], arrState[1]);
        }
    };



    render() {
        return(
            <div className="board">
                <img className={`pic1`} /*onClick={GuessedCup1}*/ value={this.state.cupValue1} src={ redCup }/>
                <img className={`pic2`} /*onClick={GuessedCup2}*/ value={this.state.cupValue2} src={ redCup }/>
                <img className={`pic3`} /*onClick={GuessedCup3}*/ value={this.state.cupValue3} src={ redCup }/>
                <input className={`input`} placeholder={`guess`}></input>
                <Button name="submit" text={`submit`}/>
                <Button name="reset" text={`reset`}/>
            </div>

        )
    }

}

export default Board