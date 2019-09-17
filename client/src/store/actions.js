import * as ATYPES from './constants.js';
import { take, put, all } from 'redux-saga/effects';

import axios from 'axios';

// actions
export const fetchCards = () => ({
  type: ATYPES.FETCH_CARDS
});
export const fetchCard = id => ({
  type: ATYPES.FETCH_CARD,
  id
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

//shipping details
export const setShippingDetails = status => ({
    type: ATYPES.SET_SHIPPING_DETAILS_STATUS,
    payload: status
});

// Sagas
/* eslint-disable */
function* fetchCardsSaga() {
  while (true) {
    yield take(ATYPES.FETCH_CARDS);
    const response = yield axios.get('/cards');
    yield put({
      type: ATYPES.SET_CARDS,
      payload: response.data
    });
  }
}

function* fetchCardSaga() {
  while (true) {
    const { id } = yield take(ATYPES.FETCH_CARD);
    const response = yield axios.get('/cards/' + id);
    yield put({
      type: ATYPES.SET_CARD,
      payload: response.data
    });
  }
}

export function* rootSaga() {
  yield all([fetchCardsSaga(), fetchCardSaga()]);
}
/* eslint-enable */
