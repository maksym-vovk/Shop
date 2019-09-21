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

// user
export const updateUser = payload => ({
  type: ATYPES.UPDATE_USER,
  payload
});

export const updateUserPassword = payload => ({
  type: ATYPES.UPDATE_USER_PASSWORD,
  payload
});

export const setMessageUser = update_message_status => ({
  type: ATYPES.SET_MESSAGE_USER,
  payload: update_message_status
});

export const setUser = payload => ({
  type: ATYPES.SET_USER,
  payload
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

function* updateUserSaga() {
  while (true) {
    const { payload: user } = yield take(ATYPES.UPDATE_USER);
    const response = yield axios.put('/customers/' + user._id, user);
    if (response.data.updated) {
      yield put({
        type: ATYPES.UPDATE_USER,
        payload: { user: response.data.user, update_message: { correct: 'Personal information updated' } }
      })
    } else {
      yield put({
        type: ATYPES.UPDATE_USER,
        payload: { update_message: { error: 'Personal information not updated try again!' } }
      })
    }
  }
}

function* updateUserPasswordSaga() {
  while (true) {
    const { payload: user } = yield take(ATYPES.UPDATE_USER_PASSWORD);
    const response = yield axios.put('/customers/' + user._id, {password: user.password});
    if (response.data.updated) {
      yield put({
        type: ATYPES.UPDATE_USER_PASSWORD,
        payload: { user: response.data.user, update_message: { correct: 'Your password updated' } }
      })
    } else {
      yield put({
        type: ATYPES.UPDATE_USER_PASSWORD,
        payload: { update_message: { error: 'Your password not updated try again!' } }
      })
    }
  }
}

export function* rootSaga() {
  yield all([fetchCardsSaga(), fetchCardSaga(), updateUserSaga(), updateUserPasswordSaga()]);
}
/* eslint-enable */
