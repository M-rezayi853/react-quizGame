import axios from 'axios';

import {
  RANKS_ME_REQUEST,
  RANKS_ME_SUCCESS,
  RANKS_ME_FAIL,
  RANKS_BEST_REQUEST,
  RANKS_BEST_SUCCESS,
  RANKS_BEST_FAIL
} from '../constants/rankConstants';

export const listRanksMe = () => async (dispatch) => {
  try {
    dispatch({ type: RANKS_ME_REQUEST });

    const { data } = await axios.get('/api/ranksme');

    dispatch({
      type: RANKS_ME_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: RANKS_ME_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

export const listRanksBest = () => async (dispatch) => {
  try {
    dispatch({ type: RANKS_BEST_REQUEST });

    const { data } = await axios.get('/api/ranksbest');

    dispatch({
      type: RANKS_BEST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: RANKS_BEST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};