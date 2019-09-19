import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import * as ATYPES from './constants.js';
import {default} from "react-redux/lib/utils/Subscription";
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
    case ATYPES.SET_USER:
      return {
        ...state,
        userData: payload
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

function searchInputReducer(state = initialState, action) {
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

export const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user: userReducer,
  searchStatus: searchReducer,
  products: fetchReducer
});
