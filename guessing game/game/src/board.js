import React, {Component} from 'react';
import Cup from './cup'
import Button from './button'
import './board.css'

class Board extends Component {
    state = {
        cup1: "position1",
        cup2: "position2",
        cup3: "position3",
        userGuess: '',
    };

    count = 0;


    switchPositions = () => {
        console.log('Switch Position Called')
        if (this.count < 20) {
            const cupOptions = ["cup1", "cup2", "cup3"];
            let optionArray = ["position1", "position2", "position3"];
            let randomCup = cupOptions[Math.floor(Math.random() * cupOptions.length)];
            console.log(randomCup);
            console.log(this.state);
            console.log(this.count);
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
                [newCup]: newClass
            });
            this.count++;
            window.setTimeout(this.switchPositions, 500);
        };
    };

    resetState =(event) =>{
        console.log('Reset State Called');

        this.count = 0;
        this.setState({
            cup1: "position1",
            cup2: "position2",
            cup3: "position3",
            userGuess: '',
        })
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
        this.setState({
            cup1: "position1",
            cup2: "position2",
            cup3: "position3",
            count: 0,
        });
    };

    render = () => {
        const {cup1, cup2, cup3} = this.state;
        return (
            <div className="board">
                <Cup userguess={this.state.userGuess} className={cup1} number={"1"}/>
                <Cup userguess={this.state.userGuess} className={cup2} number={"2"}/>
                <Cup userguess={this.state.userGuess} className={cup3} number={"3"}/>
                    <form onSubmit={this.submitted}>
                        <input onChange={this.handleChange} className={`input`} placeholder={`guess`}/>
                        <Button name="submit" text={`submit`}/>
                    </form>
                <Button func={this.switchPositions} name="start" text={`start`}/>
                <Button func={this.resetState} name="reset" text={`reset`}/>
            </div>

        )
    }

}

export default Board