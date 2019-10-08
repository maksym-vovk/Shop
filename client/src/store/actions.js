import * as ATYPES from './constants.js';

import { take, put, all } from 'redux-saga/effects';

import axios from 'axios';

// actions
export const fetchCards = query => ({
  type: ATYPES.FETCH_CARDS,
  query
});
export const fetchCard = id => ({
  type: ATYPES.FETCH_CARD,
  id
});

// user
export const registerUser = (user) => ({
  type: ATYPES.REGISTER_USER,
  user
});

export const setRegister = payload => ({
  type: ATYPES.SET_MESSAGE_USER,
  payload
});

export const setUserOrders = (user_id) => ({
  type: ATYPES.GET_USER_ORDERS,
  user_id
});

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

export const setUser = payload => {
  localStorage.setItem('userData', JSON.stringify(payload));
  return {
    type: ATYPES.SET_USER,
    payload
  }
};

export const logoutUser = () => {
  localStorage.removeItem('userData');
  return {
    type: ATYPES.LOGOUT_USER
  }
};

// Search
export const setSearchStatus = status => ({
  type: ATYPES.SET_SEARCH_STATUS,
  payload: status
});

// add-to-basket
export const changeQuantity = (newQuantity, newTotalItemPrice, id) => ({
  type: ATYPES.CHANGE_QUANTITY,
  payload: {
    id,
    newQuantity,
    newTotalItemPrice
  }
});

export const changeTotalPrice = totalPrice => ({
  type: ATYPES.CHANGE_TOTAL_PRICE,
  payload: {
    totalPrice,
  }
});

export const changeTotalItems = totalItems => ({
  type: ATYPES.CHANGE_TOTAL_ITEMS,
  payload: {
    totalItems,
  }
});

export const setInputValue = value => ({
  type: ATYPES.SET_INPUT_VALUE,
  payload: value
});

// Cart
export const addToCart = itemData => ({
  type: ATYPES.ADD_TO_CART,
  payload: itemData
});

export const removeFromCart = id => ({
  type: ATYPES.REMOVE_FROM_CART,
  payload: id
});

export const sendOrder = order => ({
  type: ATYPES.SEND_ORDER,
  order
});

export const clearOrder = () => ({
  type: ATYPES.CLEAR_ORDER
});

// Sagas
/* eslint-disable */
function* fetchCardsSaga() {
  while (true) {
    let { query } = yield take(ATYPES.FETCH_CARDS);
    const response = yield axios.get(`/cards/${query}`);
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

function* registerUserSaga() {
  while (true) {
    const { user } = yield take(ATYPES.REGISTER_USER);
    const response = yield axios.post('/customers', user);
    if (response.data.res) {
      yield put(setRegister(response.data.res));
    }
  }
}

function* updateUserSaga() {
  while (true) {
    const { payload: user } = yield take(ATYPES.UPDATE_USER);
    const response = yield axios.put('/customers/' + user._id, user);
    if (response.data.updated) {
      yield all ([
        put({
          type: ATYPES.UPDATE_USER,
          payload: { update_message: {correct: 'Personal information updated'}}
        }),
        put(setUser(response.data.user))
      ])
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
      yield all(
          [
            put({
              type: ATYPES.UPDATE_USER_PASSWORD,
              payload: { update_message: { correct: 'Your password updated' } }
            }),
            put(setUser(response.data.user))
          ])
    } else {
      yield put({
        type: ATYPES.UPDATE_USER_PASSWORD,
        payload: { update_message: { error: 'Your password not updated try again!' } }
      })
    }
  }
}

function* sendOrderSaga() {
  while (true) {
    const { order } = yield take(ATYPES.SEND_ORDER);
    const result = yield axios.post('/order', order);
    yield put({
      type: ATYPES.SET_ORDER,
      payload: result.data
    });
  }
}

function* getUserOrders() {
  while (true) {
    const { user_id } = yield take(ATYPES.GET_USER_ORDERS);
    const result = yield axios.get('/user-orders/' + user_id);
    yield put({
      type: ATYPES.SET_USER_ORDERS,
      payload: result.data
    });
  }
}

export function* rootSaga() {
  yield all([fetchCardsSaga(), fetchCardSaga(),
    registerUserSaga(), updateUserSaga(), updateUserPasswordSaga(),
    sendOrderSaga(), getUserOrders()
  ]);
}

/* eslint-enable */
