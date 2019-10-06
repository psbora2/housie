import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadGame } from '../actions';
import { Matrix, CountDown, Rule} from '../components';
import Winner from './Winner';
import Player from './Player.js';


class HomePage extends Component {

  componentDidMount() {
    const { dispatch,  } = this.props
    var gameId = this.props.match.params["gameId"]
    if(gameId !== undefined ){
      var query = `showGame(id:${gameId})`
    } else{
      query = `showGame`
    }

    this.interval = setInterval(() => dispatch(loadGame(query)), 100000);
    dispatch(loadGame(query))
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentGame, winners, isSignedIn } = this.props
    if(currentGame === null || currentGame === undefined){
      return(<Rule/>)
    }

    const numbers = currentGame.numbers.map( (number) => number.value)

    return (
      <div>
        <h1 className ="text-center ">Housie Game </h1>      
        <div>
          <div  className ="containers text-center">
            { (currentGame.workflowState === "new_game") && 
              <CountDown deadline= {currentGame.startTime}/>
            }
          </div>
          <div className = "jumbotron">
            {  (currentGame.workflowState === "running_game" || currentGame.workflowState === "finished_game") && 
              <div className = "row">
                <div className = "col-lg-9">
                  <Matrix filled_numbers = {numbers}/>
                </div>
                < div className = "col-lg-3">
                  <Winner winners = {winners} game = {currentGame}/>
                </div>
              </div>
            }
          </div>
          <div>
            { isSignedIn &&
              <Player game = {currentGame}/>
            }
          </div>
          <div>
            <Rule/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { gameReducer, reduxTokenAuth } = state
  const currentGame = gameReducer.data
  const loading = gameReducer.loading
  const winners = gameReducer.data == null ? [] : gameReducer.data.winners
  const isSignedIn = reduxTokenAuth.currentUser.isSignedIn

  return {
    currentGame,
    loading,
    winners,
    isSignedIn
  }
}

export default connect(mapStateToProps)(HomePage)
