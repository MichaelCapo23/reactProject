import React, {Component} from 'react';
import Cup from './cup'
import Button from './button'
import './board.css'

class Board extends Component {
        state = {
            cup1: "position1",
            cup2: "position2",
            cup3: "position3"
        };


    switchPositions = () =>{
        const cupOptions = ["cup1","cup2","cup3"];
        let optionArray = ["position1", "position2", "position3"];
        let randomCup = cupOptions[Math.floor(Math.random()*cupOptions.length)];
        console.log(randomCup);
        console.log(this.state);
        optionArray = optionArray.filter(item=>item !== this.state[randomCup]);
        let randomClass = optionArray[Math.floor(Math.random()*optionArray.length)];
        let newClass = this.state[randomCup];
        let newCup;
        for(var key in this.state){
            if(this.state[key] === randomClass){
                newCup = key;
                break;
            }
        }
        this.setState({
            [randomCup]: randomClass,
            [newCup]: newClass
        })
    };

    compareValues = () => {

    };

    resetState = () => {
        this.setState({
            cup1: "position1",
            cup2: "position2",
            cup3: "position3"
        })
    };

    render = () => {

        const {cup1, cup2, cup3} = this.state;

        return (
            <div className="board">
                <Cup className={cup1} number={"1"}/>
                <Cup className={cup2} number={"2"}/>
                <Cup className={cup3} number={"3"}/>
                <input className={`input`} placeholder={`guess`}></input>
                <Button function={this.compareValues} name="submit" text={`submit`}/>
                <Button function={this.resetState} name="reset" text={`reset`}/>
                <Button function={this.switchPositions} name="start" text={`start`}/>
            </div>

        )
    }

}

export default Board