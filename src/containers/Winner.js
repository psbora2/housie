import React from 'react';
import {createWinner} from '../actions';
import { connect } from 'react-redux'

export class WinnerDUM extends React.Component {
  constructor (props) {
    super(props)
    this.create_winner_type = this.create_winner_type.bind(this);
  }
  create_winner_type(e){
    e.preventDefault()
    const {dispatch, game} = this.props;
    if (this.props.isSignedIn && this.props.isAPlayer){
      console.log(e.currentTarget.attributes.winnertype.value)
      dispatch(createWinner({winnerType: e.currentTarget.attributes.winnertype.value, gameId: game.id}))
    }
  }

  render(){
    const winners = this.props.winners;
    const get_winner = (winners, type) => {
      return (winners.filter((winner) => ( winner.winnerType === type)).pop())
    }

    const winner_filter = (winners, type) => {
      return (get_winner(winners, type) !== undefined)
    }


    return(
			<div>
			<aside className="" id="submit">
			  <h2 className="text-center"><small className="text-danger">Submit Here</small></h2>
        { (winner_filter(winners, "four_corner"))
          ?
          <div className="can_submit">
            <button  type="button" className="btn btn-warning btn-lg btn-block">{get_winner(winners, "four_corner").user.name}</button>
          </div>
          :
          <div className="can_submit">
            <button  type="button" className="btn btn-primary btn-lg btn-block" winnertype = "four_corner" onClick={this.create_winner_type}>4 CORNERS</button>
          </div>
        }
        { (winner_filter(winners, "first_row"))
          ?
          <div className="can_submit">
            <button  type="button" className="btn btn-warning btn-lg btn-block">{get_winner(winners, "first_row").user.name}</button>
          </div>
          :
          <div className="can_submit">
            <button  type="button" className="btn btn-primary btn-lg btn-block"  winnertype = "first_row" onClick={this.create_winner_type}>1st Line</button>
          </div>
        }
        { (winner_filter(winners, "second_row"))
          ?
          <div className="can_submit">
            <button  type="button" className="btn btn-warning btn-lg btn-block">{get_winner(winners, "second_row").user.name}</button>
          </div>
          :
          <div className="can_submit">
            <button  type="button" className="btn btn-primary btn-lg btn-block" winnertype = "second_row" onClick={this.create_winner_type }>2nd Line</button>
          </div>
        }
        { (winner_filter(winners, "third_row"))
          ?
          <div className="can_submit">
            <button  type="button" className="btn btn-warning btn-lg btn-block">{get_winner(winners, "third_row").user.name}</button>
          </div>
          :
          <div className="can_submit">
            <button  type="button" className="btn btn-primary btn-lg btn-block" winnertype = "third_row" onClick={this.create_winner_type }>3rd Line</button>
          </div>
        }
        { (winner_filter(winners, "full_house"))
          ?
          <div className="can_submit">
            <button  type="button" className="btn btn-warning btn-lg btn-block">{get_winner(winners, "full_house").user.name}</button>
          </div>
          :
          <div className="can_submit">
            <button  type="button" className="btn btn-primary btn-lg btn-block"winnertype = "full_house" onClick={this.create_winner_type } >Full House</button>
          </div>
        }
  		</aside>
    </div>
		)
	}
}
function mapStateToProps(state) {
  const { reduxTokenAuth, playerReducer } = state
  const isSignedIn = reduxTokenAuth.currentUser.isSignedIn
  const isAPlayer = (playerReducer.data != null)
  return {isSignedIn, isAPlayer}
}

export default connect(mapStateToProps)(WinnerDUM)