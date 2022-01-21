import {
  RANKS_ME_REQUEST,
  RANKS_ME_SUCCESS,
  RANKS_ME_FAIL,
  RANKS_BEST_REQUEST,
  RANKS_BEST_SUCCESS,
  RANKS_BEST_FAIL
} from '../constants/rankConstants';

export const ranksMeListReducer = (state = { ranksMe: [] }, action) => {
  switch (action.type) {
    case RANKS_ME_REQUEST:
      return {
        loading: true
      };
    case RANKS_ME_SUCCESS:
      return {
        loading: false,
        ranksMe: action.payload
      };
    case RANKS_ME_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const ranksBestListReducer = (state = { ranksBest: [] }, action) => {
  switch (action.type) {
    case RANKS_BEST_REQUEST:
      return {
        loading: true
      };
    case RANKS_BEST_SUCCESS:
      return {
        loading: false,
        ranksBest: action.payload
      };
    case RANKS_BEST_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};