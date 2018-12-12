import React, {Component} from 'react';
import Reset from './resetbtn';
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
                    alert(`player 1 (X) has won!`);
                } else {
                    alert(`player 2 (O) has won!`);
                }
            }
        }
    }

    clickedReset = () => {
        let square = this.state.board;
        for (let i = 0; i < square.length; i++) {
            square[i] = null;
        }
        this.setState({
            board: square,
            player: "X",
        })
    };


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
                </div>
        );

        return (
            <div className="container">
                <h1 className="tictactoe">Tic Tac Toe</h1>
                <div className="board">
                    {Box}
                </div>
                <Reset resetFunction={this.clickedReset.bind(this)}/>
            </div>
        );
    }
}

export default App;
