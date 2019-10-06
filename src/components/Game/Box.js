import React from 'react';

class Box extends React.Component {
	render(){
		const {filled, value} = this.props
		if (filled === true){
			var color = "bg-success"
		}else{
			color = ""
		}
		return(
		<li className = {color} key = {value}>{this.props.value}</li>
		)
	}
}

export default Box;