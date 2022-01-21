import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { informationsListReducer } from './reducers/informationReducers';
import { gameInformationsListReducer } from './reducers/gameInformationReducers';
import { ranksMeListReducer, ranksBestListReducer } from './reducers/rankReducers';
import { groupsListReducer } from './reducers/groupReducers';

const reducer = combineReducers({
  informationsList: informationsListReducer,
  gameInformationsList: gameInformationsListReducer,
  ranksMeList: ranksMeListReducer,
  ranksBestList: ranksBestListReducer,
  groupsList: groupsListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;