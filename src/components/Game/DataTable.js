import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import { ModalForm } from './Modal';
import { destroyGame } from '../../actions';

export class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete game forever?')
    if(confirmDelete){
      this.props.dispatch(destroyGame({id:id}));
    }
  }

  render() {
    const games = this.props.games.map(game => {
      return (
        <tr key={game.id}>
          <th scope="row">{game.id}</th>
          <td>{game.startTime}</td>
          <td>{game.workflowState}</td>
          <td>{game.createdAt}</td>
          <td>{game.user.name}</td>
          <td>
            <div style={{width:"250px"}} className= "row">
              <div className = "col-lg-4 m-10">
                <Button color="success" ><a href = {"/games/" + game.id}>show</a></Button>
              </div>
              <ModalForm buttonLabel="Edit" game={game}/>
              {' '}
              <div className = "col-lg-4 m-10">
                <Button color="danger" onClick={() => this.deleteItem(game.id)}>Del</Button>
              </div>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Start Time</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games}
        </tbody>
      </Table>
    )
  }
}

export default DataTable