import fetch from 'cross-fetch'
import {setAuthHeaders} from './GameAction'
export const CREATE_WINNER = "CREATE_WINNER"
export const createWinner = data => ({
  type: CREATE_WINNER,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: `mutation { createWinner(winnerType:"${data.winnerType}", gameId: "${data.gameId}"){winnerType user{name}}}`}) 
    }
  )
});