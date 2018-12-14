import React, {Component} from 'react';
import Button from './button'
import './board.css'

import redCup from './images/slack.png';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cupValue1: 1,
            cupValue2: 2,
            cupValue3: 3,
            moveLeft1: "0px",
            moveLeft2: "0px",
            moveLeft3: "0px"
        };
    }

    getLeftFromState = () => {
        if(this.state.cupValue1 === 1) {

        } else if (this.state.cupValue1 === 2) {
            this.cupval1.moveLeft1 = '45px';
        } else {
            this.cupval1.moveLeft1 = '90px';
        }
    };

    switchStateValues = (state1, state2) => {
        let temp = null;
        console.log("state1: ", state1);
        console.log("state2: ", state2);
        // const state1State = state1[0];
        // const state1Value = state1[1];
        // const state2State = state2[0];
        // const state3Value = state2[1];
        if (state1[0] === Object.keys(this.state)[0]) {
            if (state2[0] === Object.keys(this.state)[1]) {
                this.setState = ({
                    cupValue1: state2[1],
                    cupValue2: state1[1],
                    if() {
                        
                    }
                });
                this.getLeftFromState();
            } else {
                this.setState = ({
                    cupValue1: state2[1],
                    cupValue3: state1[1],
                });
                this.getLeftFromState();
            }
        } else if (state1[0] === Object.keys(this.state)[1]) {
            if (state2[0] === Object.keys(this.state)[0]) {
                this.setState({
                    cupValue2: state2[1],
                    cupValue1: state1[1],
                });
                this.getLeftFromState();
            } else {
                this.setState({
                    cupValue2: state2[1],
                    cupValue3: state1[1],
                });
                this.getLeftFromState();
            }
        } else {
            if (state2[0] === Object.keys(this.state)[0]) {
                this.setState({
                    cupValue1: state1[1],
                    cupValue3: state2[1],
                });
                this.getLeftFromState();
            } else {
                this.setState({
                    cupValue2: state2[1],
                    cupValue3: state1[1],
                });
                this.getLeftFromState();
            }
        }
    };

    setCupClass() {
        let randNum = Math.floor(Math.random() * 3) + 1;
        console.log(randNum);
        let stateKeys = [];
        stateKeys = Object.keys(this.state);
        const stateArr = [[stateKeys[0], 1], [stateKeys[1], 2], [stateKeys[2], 3]];
        if (randNum === 1) {
            const arrState = stateArr.filter(value => value[1] !== 3);
            this.switchStateValues(arrState[0], arrState[1]);
        } else if (randNum === 2) {
            const arrState = stateArr.filter(value => value[1] !== 1);
            this.switchStateValues(arrState[0], arrState[1]);
        } else {
            const arrState = stateArr.filter(value => value[1] !== 2);
            this.switchStateValues(arrState[0], arrState[1]);
        }
    };


    render() {
        return (
            <div className="board">
                <img style={this.cupval1} className={`pic1`} /*onClick={GuessedCup1}*/ value={this.state.cupValue1} src={redCup}/>
                <img className={`pic2`} /*onClick={GuessedCup2}*/ value={this.state.cupValue2} src={redCup}/>
                <img className={`pic3`} /*onClick={GuessedCup3}*/ value={this.state.cupValue3} src={redCup}/>
                <input className={`input`} placeholder={`guess`}></input>
                <Button name="submit" text={`submit`}/>
                <Button name="reset" text={`reset`}/>
            </div>

        )
    }

}

export default Board