import axios from 'axios';

import {
  GAME_INFORMATIONS_REQUEST,
  GAME_INFORMATIONS_SUCCESS,
  GAME_INFORMATIONS_FAIL
} from '../constants/gameInformationConstants';

export const listGameInformations = () => async (dispatch) => {
  try {
    dispatch({ type: GAME_INFORMATIONS_REQUEST });

    const { data } = await axios.get('/api/gameInformations');

    dispatch({
      type: GAME_INFORMATIONS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GAME_INFORMATIONS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};