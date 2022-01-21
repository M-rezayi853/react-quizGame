import {
  GROUPS_LIST_REQUEST,
  GROUPS_LIST_SUCCESS,
  GROUPS_LIST_FAIL
} from '../constants/groupConstants';

export const groupsListReducer = (state = { groups: [] }, action) => {
  switch(action.type) {
    case GROUPS_LIST_REQUEST:
      return {
        loading: true
      };
    case GROUPS_LIST_SUCCESS:
      return {
        loading: false,
        groups: action.payload
      };
    case GROUPS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  };
};