import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

// ActionTypes Constants
const SET_AUTHORIZED = 'SET_AUTHORIZED';

// Search
const SET_SEARCH_STATUS = 'SET_SEARCH_STATUS'

// getters
export const getAuthState = state => {
  return state.authorized
}

// actions
export const setAuthState = authorized => ({
  type: SET_AUTHORIZED,
  payload: authorized
})
// Search
export const setSearchStatus = status => ({
  type: SET_SEARCH_STATUS,
  payload: status
})

// state for start
const initialState = {
  authData: {
    authorized: false
  },

  // Search
  searchStatus: {
    status: false
  }
}

function authReducer(state = initialState.authData, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_AUTHORIZED:
      return {
        ...state,
        authorized: payload
      }
    default:
      return state;
  }
}
// Search
function searchReducer(state = initialState.searchStatus, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_SEARCH_STATUS:
      return {
        ...state,
        status: payload
      };
    default:
      return state
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