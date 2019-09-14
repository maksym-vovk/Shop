import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import * as ATYPES from './constants.js';
// state for start
const initialState = {
  authData: {
    authorized: false
  },

  // Search
  searchStatus: {
    status: false
  },

  // Fetch

  products: {
    cards: []
  }
};

function authReducer(state = initialState.authData, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.SET_AUTHORIZED:
      return {
        ...state,
        authorized: payload
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
// Fetch
function fetchReducer(state = initialState.products, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.SET_CARDS:
      return {
        ...state,
        cards: payload
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  authorization: authReducer,
  searchStatus: searchReducer,
  products: fetchReducer
});
