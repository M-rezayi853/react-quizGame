import {
  INFORMATIONS_LIST_REQUEST,
  INFORMATIONS_LIST_SUCCESS,
  INFORMATIONS_LIST_FAIL
} from '../constants/informationConstants';

export const informationsListReducer = (state = { informations: {} }, action) => {
  switch(action.type) {
    case INFORMATIONS_LIST_REQUEST:
      return {
        loading: true
      };
    case INFORMATIONS_LIST_SUCCESS:
      return {
        loading: false,
        informations: action.payload
      };
    case INFORMATIONS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  };
};