import axios from 'axios';

import {
  INFORMATIONS_LIST_REQUEST,
  INFORMATIONS_LIST_SUCCESS,
  INFORMATIONS_LIST_FAIL
} from '../constants/informationConstants';

export const listInformations = () => async (dispatch) => {
  try {
    dispatch({ type: INFORMATIONS_LIST_REQUEST });

    const { data } = await axios.get('/api/informations');

    dispatch({
      type: INFORMATIONS_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: INFORMATIONS_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};