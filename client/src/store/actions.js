import * as ATYPES from './constants.js';
import { take, put, all } from 'redux-saga/effects';

import axios from 'axios';

// actions
export const fetchCards = () => ({
  type: ATYPES.FETCH_CARDS
});

export const setAuthState = authorized => ({
  type: ATYPES.SET_AUTHORIZED,
  payload: authorized
});
// Search
export const setSearchStatus = status => ({
  type: ATYPES.SET_SEARCH_STATUS,
  payload: status
});

// Sagas
/* eslint-disable */
function* fetchCardsSaga() {
  while (true) {
    yield take(ATYPES.FETCH_CARDS);
    const response = yield axios.get('/cards');
    const payload = response.data;
    yield put({
      type: ATYPES.SET_CARDS,
      payload
    })
  }
}

export function* rootSaga() {
  yield all([
    fetchCardsSaga()
  ])
}
/* eslint-enable */
