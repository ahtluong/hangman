import React, { Component } from 'react';
import './Alphabet.css';

class Alphabet extends Component {
  renderAlphabet() {
		let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  	return (
  		<div>
  			{
  				alphabet.map(character => {
  					return <button key={character}>{character}</button>
  				})
  			}
  		</div>
  	);
  }

  render() {
    return (
    	<div>
    		<div className="box">
    			{this.renderAlphabet()}
    		</div>
    		<button onClick={()=> { this.props.decrementLifeLeft();}}>Decrease LifeLeft</button>
    	</div>
    );
  }
}

export default Alphabet;