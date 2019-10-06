import React from 'react';

export class UserCard extends React.Component {

  render(){
    const {numbers} = this.props;
    return(
      <div className = "offset-lg-2 col-lg-8">
        <h3>Ticket</h3>
        <table id="user_numbers" className="table table-bordered">
          <tr>
            {numbers[0].map((number) => (<Number number = {number}/>))}
          </tr>
          <tr>
            {numbers[1].map((number) => (<Number number = {number}/>))}
          </tr>
          <tr>
            {numbers[2].map((number) => (<Number number = {number}/>))}
          </tr>
        </table>
      </div>)
  }
}

class Number extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      disable: "active"
    };
    this.addDisableClass = this.addDisableClass.bind(this);
  }

  addDisableClass(e){
    e.preventDefault()
    if(this.state.disable === "disable"){ 
      this.setState({disable: 'active'});
    }else {
      this.setState({disable: "disable"});
    }
  }

  render(){
    const {number} = this.props;
    if(number === "x"){
      return(<td className = "bg-secondary"></td>)
    } else {
      return(<td onClick = {this.addDisableClass} className = {this.state.disable}> {number}</td>)
    }
  }
}