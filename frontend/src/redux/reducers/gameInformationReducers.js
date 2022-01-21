import {
  GAME_INFORMATIONS_REQUEST,
  GAME_INFORMATIONS_SUCCESS,
  GAME_INFORMATIONS_FAIL
} from '../constants/gameInformationConstants';

export const gameInformationsListReducer = (state = { gameInformations: [] }, action) => {
  switch (action.type) {
    case GAME_INFORMATIONS_REQUEST:
      return {
        loading: true
      };
    case GAME_INFORMATIONS_SUCCESS:
      return {
        loading: false,
        gameInformations: action.payload
      };
    case GAME_INFORMATIONS_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state
  };
};