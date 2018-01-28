import React, { Component } from 'react';
import './Word.css';

class Word extends Component {
	constructor(props) {
		super(props);

		const word = 'FISHHHH';
		const wordArray = word.split('');
		this.state = {
			word,
			wordArray,
			shownCharacters: []
		};
	}

	componentWillReceiveProps(nextProps) {
		this.checkGuessCharacter(nextProps.guessCharacter);
	}

	checkGuessCharacter(word) {
		let { wordArray } = this.state;
		if (word === '') ;
		else if (wordArray.includes(word)) {
			let indices = [];
			let idx = wordArray.indexOf(word);
			while (idx !== -1) {
				indices.push(idx);
				idx = wordArray.indexOf(word, idx + 1);
			}
			const newArray = this.state.shownCharacters.concat(indices);
  		this.setState({shownCharacters: newArray});
  		this.props.getResult(true);
		} else this.props.getResult(false);
	}

  render() {
    return (
    	<div>
    		<p>Word: {this.state.word}</p>
    		{
    			this.state.wordArray.map((character, index) => {
    				return <span key={index} className="tile">{this.state.shownCharacters.includes(index) ? character : '*'}</span>
    			})
    		}
    	</div>
    );
  }
}

export default Word;