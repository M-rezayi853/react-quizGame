import axios from 'axios';

import {
  GROUPS_LIST_REQUEST,
  GROUPS_LIST_SUCCESS,
  GROUPS_LIST_FAIL
} from '../constants/groupConstants';

export const listGroups = () => async (dispatch) => {
  try {
    dispatch({ type: GROUPS_LIST_REQUEST });

    const { data } = await axios.get('/api/groups');

    dispatch({
      type: GROUPS_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GROUPS_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};