import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            player: "X",
        }
    }

    checkWinner() {
        let winLines = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],

            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],

            ["0", "4", "8"],
            ["2", "4", "6"],
        ];

        for(let index = 0; index < winLines.length; index++) {
            const [a,b,c] = winLines[index];
            if(this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c] && this.state.board[a] !== null) {
                if(this.state.board[a] === "X") {
                    alert("player X has won!");
                } else {
                    alert("player O has won!");
                }
            }
        }

    }

    addResetBtn() {
        return <div className="resetBtn" key="btn">Reset</div>
    }

    clickedReset() {
        let square = this.state.board;
        for(let i = 0; i < square.length; i++) {
            square[i] = null;
        }
        this.setState({
            board : square,
            player : "X",
        })
    }

    handleClick(index) {
        let newBoard = this.state.board;
        if (this.state.board[index] === null) {
            newBoard[index] = this.state.player;
            this.setState({
                board: newBoard,
                player: this.state.player === "X" ? "O" : "X",
            });
            this.checkWinner();
        }
    }

    render() {
        const Box = this.state.board.map(
            (box, index) =>
                <div className="box"
                     key={index}
                     onClick={() => this.handleClick(index)}>
                    {box}
                </div>);

        const reset = <div className="resetBtn" onClick={() => this.clickedReset()}>reset</div>;

        // const winDiv = <div className="winner"></div>;


        return (

            <div className="container">
                <h1>tic tac toe</h1>
                <div className="board">
                    {Box}
                </div>
                {reset}
            </div>

        );
    }
}

export default App;
