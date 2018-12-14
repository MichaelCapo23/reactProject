import React, { Component } from 'react';
import Board from './board';
import Button from './button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputValue: null,
        number : null,
        turn : null,
    }
  }




  render() {
    return (
        <div className={`top`}>
            <Board/>
        </div>
    )
  }
}

export default App;
