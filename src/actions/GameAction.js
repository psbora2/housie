export const LOAD_GAME = "LOAD_GAME"

export function setAuthHeaders(){
  return ({ 'Content-Type': 'application/json', 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'uid':localStorage.getItem('uid')})
}


export const loadGame = data => ({
  type: LOAD_GAME,
  promise:  (client, url) => fetch(url,
    {
      method: 'POST',
      headers: setAuthHeaders(),
      body: JSON.stringify({ query: `{ ${data} { id workflowState startTime numbers{ value } winners{winnerType user{name}}}}`})
    }
  )
});