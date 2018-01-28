import React, { Component } from 'react';
import './Alphabet.css';

class Alphabet extends Component {
  state = {
  	activeClassName: "btn btn-success m-1",
  	disabledClassName: "btn btn-danger m-1 disabled",
  	clickedButtons: []
  }

  onButtonClick(character, index) {
  	let newArray = this.state.clickedButtons.slice();
  	newArray.push(index);
  	this.setState({clickedButtons: newArray});
  	this.props.onClick(character);
  }

  renderAlphabet() {
		let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  	return (
  		<div>
  			{
  				alphabet.map((character, index) => {
  					return (
  						<button
  							key={character}
  							onClick={() => {this.onButtonClick(character, index)}}
  							className={this.state.clickedButtons.includes(index) ? this.state.disabledClassName : this.state.activeClassName}
  						>
  							{character}
  						</button>
  					);
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
    	</div>
    );
  }
}

export default Alphabet;