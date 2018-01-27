import React, { Component } from 'react';
import Word from './components/Word';
import Alphabet from './components/Alphabet';
import LifeLeft from './components/LifeLeft';

class App extends Component {
  state = {
    lifeLeft: 6
  };

  decrementLifeLeft() {
    console.log(this);
    let lifeLeft = this.state.lifeLeft;  
    this.setState({ lifeLeft: lifeLeft - 1 });
  }

  render() {
    return (
      <div>
        <Word />
        <Alphabet decrementLifeLeft={this.decrementLifeLeft.bind(this)} />
        <LifeLeft lifeLeft={this.state.lifeLeft} />
      </div>
    );
  }
}

export default App;