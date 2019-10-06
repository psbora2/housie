import fetch from 'cross-fetch'
import {setAuthHeaders} from './GameAction'
export const LOAD_PLAYER = "LOAD_PLAYER"
export const loadPlayer = data => ({
  type: LOAD_PLAYER,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: `query {currentPlayer(id: ${data.gameId}){ id numbers }}`}) 
    }
  )
});

export const CREATE_PLAYER = "CREATE_PLAYER"
export const createPlayer = data => ({
  type: CREATE_PLAYER,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: `mutation { createPlayer(gameId: ${data.id} ){id numbers}}`}) 
    }
  )
});



