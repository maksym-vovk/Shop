import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import axios from 'axios';

// ActionTypes Constants
// Auth
const SET_AUTHORIZED = 'SET_AUTHORIZED';

// Search
const SET_SEARCH_STATUS = 'SET_SEARCH_STATUS';

// Fetch

const FETCH_CARDS = 'FETCH_CARDS';

// getters
export const getAuthState = state => {
  return state.authorized;
};

// actions
export const fetchCards = async() => {
  const result = await axios('/cards');
  return {
    type: FETCH_CARDS,
    payload: result
  };
};

export const setAuthState = authorized => ({
  type: SET_AUTHORIZED,
  payload: authorized
});
// Search
export const setSearchStatus = status => ({
  type: SET_SEARCH_STATUS,
  payload: status
});

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

  allCards: []
};

function authReducer(state = initialState.authData, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTHORIZED:
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
    case SET_SEARCH_STATUS:
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
}
// Fetch
function fetchReducer(state = initialState.allCards, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CARDS:
      return {
        ...state,
        allCards: payload
      };

    default:
      return state;
  }
}
const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  authorization: authReducer,
  searchStatus: searchReducer
});
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

export default store;
