import * as ATYPES from './constants.js';
import {take, put, all} from 'redux-saga/effects';

import axios from 'axios';

// actions
export const fetchCards = () => ({
  type: ATYPES.FETCH_CARDS
});
export const fetchCard = id => ({
  type: ATYPES.FETCH_CARD,
  id
});

export const updateUser = payload => ({
  type: ATYPES.UPDATE_USER,
  payload
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

// shipping details
export const setShippingDetails = status => ({
  type: ATYPES.SET_SHIPPING_DETAILS_STATUS,
  payload: status
});

// add-to-basket
export const addToBag = items => ({
  type: ATYPES.ADD_TO_BAG,
  payload: items
});

export const changeQuantity = (newQuantity, newTotalItemPrice, id) => ({
  type: ATYPES.CHANGE_QUANTITY,
  payload: {
    id,
    newQuantity,
    newTotalItemPrice
  }
});

export const changeTotalPrice = (totalPrice) => ({
  type: ATYPES.CHANGE_TOTAL_PRICE,
  payload: {
    totalPrice,
  }
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
        const {id} = yield take(ATYPES.FETCH_CARD);
        const response = yield axios.get('/cards/' + id);
        yield put({
            type: ATYPES.SET_CARD,
            payload: response.data
        });
    }
}

function* updateUserSaga() {
    while (true) {
        const {payload: user} = yield take(ATYPES.UPDATE_USER);
        const response = yield axios.put('/customers/' + user._id, user);
        if (response.data.updated) {
            yield put({
                type: ATYPES.SET_USER,
                payload: response.data.user
            })
        } else {
            console.log(response.data.error_message);
        }

    }
}

export function* rootSaga() {
    yield all([fetchCardsSaga(), fetchCardSaga(), updateUserSaga()]);
}

/* eslint-enable */
