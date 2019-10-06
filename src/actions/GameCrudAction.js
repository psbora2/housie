import {setAuthHeaders} from './GameAction';

export const LIST_GAME = "LIST_GAME"
export const listGame = (data) => ({
  type: LIST_GAME,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: '{ allGames { id workflowState startTime winners { winnerType user{name}} user{name} createdAt }}' })
    }
  )
});

export const UPDATE_GAME = "UPDATE_GAME"
export const updateGame = (data) => ({
  type: UPDATE_GAME,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: `mutation { updateGame(startTime:"${data.startTime}",id:${data.id}) {id workflowState startTime createdAt user{name}}}`})
    }
  )
});

export const DESTROY_GAME = "DESTROY_GAME"
export const destroyGame = (data) => ({
  type: DESTROY_GAME,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: `mutation { destroyGame(id:${data.id}){id}}`})
    }
  )
});

export const ADD_GAME = "ADD_GAME"
export const addGame = (data) => ({
  type: ADD_GAME,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: `mutation { createGame(startTime:"${data.startTime}") {id workflowState startTime createdAt user{name}} }`})
    }
  )
});