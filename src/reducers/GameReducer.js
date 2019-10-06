import { LOAD_GAME, CREATE_WINNER } from "../actions";

const initialState = {
    data: null,
    loading: false,
    error: null
}

export const gameReducer = (state = initialState, action) => {

    switch (action.type) {
    case LOAD_GAME:
      return {
        ...state,
        data: action.payload.showGame
      };
    case CREATE_WINNER:
      var winner_array = state.data === undefined ? [] : state.data.winners
      if(action.payload.createWinner !== undefined){
        state.data.winners = [].concat([action.payload.createWinner], winner_array)
      }
      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
}