import { LOAD_PLAYER, CREATE_PLAYER } from "../actions";

const initialState = {
    data: null,
    loading: false,
    error: null
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
		case LOAD_PLAYER:
			return {
				...state,
				data: action.payload.currentPlayer
			};
		case CREATE_PLAYER:
			return {
				...state,
				data: action.payload.createPlayer
			};

		default:
			return {
				...state
			};
	}
}
