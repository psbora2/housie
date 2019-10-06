import React from 'react';
import { connect } from 'react-redux'
import { createPlayer, loadPlayer } from '../actions'
import {UserCard} from "../components"

class Player extends React.Component {
  componentDidMount() {
    const { dispatch, game } = this.props
    this.registerPlayer = this.registerPlayer.bind(this);
    dispatch(loadPlayer({gameId: game.id}))
  }

  registerPlayer(e){
  	const { dispatch, game } = this.props
  	e.preventDefault()
    dispatch(createPlayer({id: game.id})).then(
    dispatch(loadPlayer({gameId: game.id})))
  }
	render(){
		const {playerReducer, reduxTokenAuth, game}  = this.props

		if (!reduxTokenAuth.currentUser.isSignedIn){
			return(
				<div className = "col-lg-12 text-center">
					<a type="button" className="btn btn-primary btn-lg" href="/login">Login</a>
				</div>
			)
		}
		if (playerReducer.data !== null && reduxTokenAuth.currentUser.isSignedIn && (game.workflowState === "running_game" || game.workflowState === "finished_game")){
			return(
				<div className = "col-lg-12 text-center text-info" ><UserCard numbers = {playerReducer.data.numbers}/></div>
			)
		}
		else if (playerReducer.data !== null && reduxTokenAuth.currentUser.isSignedIn){
			return(
				<div className = "col-lg-12 text-center text-info" >Game will start soon</div>
			)
		} 
		else {
				return (<div className = "text-center"><button className = "btn btn-primary btn-md text-centre"  onClick={this.registerPlayer}>Registration </button>
      </div>)
		}

	}
}
function mapStateToProps(state) {
  return (state)
}

export default connect(mapStateToProps)(Player);