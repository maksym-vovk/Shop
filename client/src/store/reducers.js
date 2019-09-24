import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import * as ATYPES from './constants.js';
// state for start
const initialState = {
  userData: {
    authorized: false
  },

  // Search
  searchStatus: {
    status: false
  },

  // Fetch
  products: {
    cards: []
  },

  // Cart
  cart: {
    totalPrice: 0,
    items: []
  },

  searchInput: {
    value: ''
  }
};

function userReducer(state = initialState.userData, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.SET_AUTHORIZED:
      return {
        ...state,
        authorized: payload
      };
    case ATYPES.SET_MESSAGE_USER:
      return {
        ...state,
        update_message: payload
      };
    case ATYPES.UPDATE_USER:
      return {
        ...state,
        update_message: payload.update_message,
        userData: payload.user ? payload.user : state.userData
      };
    case ATYPES.UPDATE_USER_PASSWORD:
      return {
        ...state,
        update_message: payload.update_message,
        userData: payload.user ? payload.user : state.userData
      };
    case ATYPES.SET_USER:
      return {
        ...state,
        userData: payload
      };
    case ATYPES.LOGOUT_USER:
      return {
        ...state,
        authorized: false,
        userData: null
      };
    default:
      return state;
  }
}
// Search
function searchReducer(state = initialState.searchStatus, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.SET_SEARCH_STATUS:
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
}

function searchInputReducer(state = initialState.searchInput, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.SET_INPUT_VALUE:
      return {
        ...state,
        value: payload
      };
    default:
      return state
  }
}

// Fetch
function fetchReducer(state = initialState.products, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.SET_CARDS:
      return {
        ...state,
        cards: payload
      };
    case ATYPES.SET_CARD:
      return {
        ...state,
        card: payload
      };
    default:
      return state;
  }
}
// Cart
/* eslint-disable */
function cartReducer(state = initialState.cart, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.ADD_TO_CART:
      return {
        ...state,
        totalPrice: state.totalPrice + payload.price,
        items: [
          ...state.items,
          payload
        ]
      }
    case ATYPES.REMOVE_FROM_CART:
      const item = state.items.find(el => el.id === payload)
      return {
        ...state,
        totalPrice: state.totalPrice - item.price * item.quantity,
        items: state.items.filter(el => el.id !== payload)
      }
    default:
      return state;
  }
}
/* eslint-enable */

export const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user: userReducer,
  searchStatus: searchReducer,
  products: fetchReducer,
  cart: cartReducer,
  searchInputValue: searchInputReducer
});
