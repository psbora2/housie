import React from 'react';
import Box from './Box.js';

export class Matrix extends React.Component {

	componentDidUpdate(prevProps) {
		var audio = document.getElementById('audio');
		 if (JSON.stringify(this.props.filled_numbers) !== JSON.stringify(prevProps.filled_numbers) && audio) {
		 audio.load();
	   audio.play();
	 }
	}
	
	render(){
		const filled_numbers = this.props.filled_numbers
		var boxes = [];
		var i = 0
			for (i = 1; i < 91; i++) {
			  boxes.push(i); 
			}

		var last_four_numbers = filled_numbers.slice(Math.max(filled_numbers.length - 4, 0))
		return(
			<div>
				<div >
				{ JSON.stringify(last_four_numbers) !== JSON.stringify([]) ? 
					<audio autoPlay id = "audio">
						<source  src={require(`../../voice/${filled_numbers[filled_numbers.length - 1]}.wav`)} type="audio/wav"/>
					</audio>
					:
					<div></div>
				}
				<div>
				<div className = "offset-lg-4 col-lg-4"><h3>Number Called</h3></div>
				<div className ="offset-lg-4 col-lg-4">
					{last_four_numbers.map(number => <span className = "btn m-2 btn-primary" key ={number}>{number}</span>)}
				</div>
				</div>
				</div>
				<div className = "box_number">
					<ul>
						{boxes.map(box => <Box key = {box} value ={box} filled = {filled_numbers.includes(box)}/>)}
					</ul>
				</div>
			</div>
		)
	}
}