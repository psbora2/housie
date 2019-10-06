import { LIST_GAME, ADD_GAME, DESTROY_GAME, UPDATE_GAME } from "../actions";

const initialState = {
    data: [],
    loading: false,
    error: null
}

export const gameCrudReducer = (state = initialState, action) => {
    switch (action.type) {
    case LIST_GAME:
      return {
        ...state,
        data: (action.payload.allGames === null ? [] : action.payload.allGames)
      };
    case UPDATE_GAME:
      state.data = state.data.filter(function(value, index, arr){
          return value.id !== action.payload.updateGame.id;
      });

      state.data = [].concat([action.payload.updateGame], state.data)

      return {
        ...state
      };
    case ADD_GAME:
      state.data = [].concat([action.payload.createGame], state.data)
      return {
        ...state
      };
    case DESTROY_GAME:
      state.data = state.data.filter(function(value, index, arr){
          return value.id !== action.payload.destroyGame.id;
      });
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}