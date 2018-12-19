import React, {Component} from 'react';
import Cup from './cup'
import Button from './button'
import './board.css'

class Board extends Component {
        state = {
            cup1: "position1",
            cup2: "position2",
            cup3: "position3",
            count: 0,
            userGuess: '',
        };


    switchPositions = () => {
        if (this.state.count < 20) {
            const cupOptions = ["cup1", "cup2", "cup3"];
            let optionArray = ["position1", "position2", "position3"];
            let randomCup = cupOptions[Math.floor(Math.random() * cupOptions.length)];
            console.log(randomCup);
            console.log(this.state);
            console.log(this.state.count);
            optionArray = optionArray.filter(item => item !== this.state[randomCup]);
            let randomClass = optionArray[Math.floor(Math.random() * optionArray.length)];
            let newClass = this.state[randomCup];
            let newCup;
            for (var key in this.state) {
                if (this.state[key] === randomClass) {
                    newCup = key;
                    break;
                }
            }
            this.setState({
                [randomCup]: randomClass,
                [newCup]: newClass,
                count: this.state.count+1,
            });
        };
        window.setTimeout(this.switchPositions, 500);
    };

    resetState = () => {
        this.setState({
            cup1: "position1",
            cup2: "position2",
            cup3: "position3",
            count: 0
        });
    };

    handleChange = (event) => {
        console.log(event.target.value);
        event.preventDefault();
        this.setState({
          userGuess: event.target.value
        });
    };

    submitted = (event) => {
        event.preventDefault();
        console.log("input values: ", this.state);

        this.setState({
            cup1: "position1",
            cup2: "position2",
            cup3: "position3",
            count: 0,
            userGuess: '',
        });
    };

    render = () => {
        const {cup1, cup2, cup3} = this.state;
        console.log(this.state.userGuess);
        return (
            <div className="board">
                <Cup onClick={this.compareValues} userguess={this.state.userGuess} className={cup1} number={"1"}/>
                <Cup onClick={this.compareValues} userguess={this.state.userGuess} className={cup2} number={"2"}/>
                <Cup onClick={this.compareValues} userguess={this.state.userGuess} className={cup3} number={"3"}/>
                    <form onSubmit={this.submitted}>
                        <input onChange={this.handleChange} className={`input`} placeholder={`guess`}></input>
                        <Button name="submit" text={`submit`}/>
                    </form>
                <Button function={this.resetState} name="reset" text={`reset`}/>
                <Button function={this.switchPositions} name="start" text={`start`}/>
            </div>

        )
    }

}

export default Board