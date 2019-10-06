import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listGame } from '../actions';
import { Container, Row, Col } from 'reactstrap';
import {DataTable, ModalForm} from './../components';

class GameList extends Component {

  componentDidMount(){
    this.props.listGame();
  }

  render() {
    const {gameList} = this.props;
 
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Game List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Add Item"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable games = {gameList} dispatch ={this.props.dispatch} />
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const { gameCrudReducer } = state
  const gameList = gameCrudReducer.data
  return {
    gameList
  }
}

const mapDispatchToProps = dispatch => {
  return({
    listGame: () => {dispatch(listGame())},
    dispatch
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
