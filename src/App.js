import React, { Component } from 'react';
import Word from './components/Word';
import Alphabet from './components/Alphabet';
import LifeLeft from './components/LifeLeft';

class App extends Component {
  state = {
    lifeLeft: 6,
    characterClick: ''
  };

  checkResult(result) {
    if (!result) this.decrementLifeLeft();
  } 

  getAlphabetClick(character) {
    this.setState({ characterClick: character})
  }

  decrementLifeLeft() {
    let lifeLeft = this.state.lifeLeft;  
    this.setState({ lifeLeft: lifeLeft - 1, characterClick: '' });
  }

  render() {
    return (
      <div>
        <Word guessCharacter={this.state.characterClick} getResult={this.checkResult.bind(this)} />
        <Alphabet
          onClick={this.getAlphabetClick.bind(this)}
        />
        <LifeLeft lifeLeft={this.state.lifeLeft} />
      </div>
    );
  }
}

export default App;