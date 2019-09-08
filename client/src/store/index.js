import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

// ActionTypes Constants
const SET_EMAIL_ENGAGED = 'SET_EMAIL_ENGAGED';
const SET_LOGIN_ENGAGED = 'SET_LOGIN_ENGAGED';
const SET_AUTHORIZED = 'SET_AUTHORIZED';

// getters
export const getEmailState = state => {
  return state.engagedData.email
}

export const getLoginState = state => {
  return state.engagedData.login
}

export const getAuthState = state => {
  return state.authorized
}

// actions
export const setEmailState = engaged => ({
  type: SET_EMAIL_ENGAGED,
  payload: engaged
})

export const setLoginState = engaged => ({
  type: SET_LOGIN_ENGAGED,
  payload: engaged
})

export const setAuthState = authorized => ({
  type: SET_AUTHORIZED,
  payload: authorized
})

// state for start
const initialState = {
  engagedData: {
    email: false,
    login: false
  },
  authData: {
    authorized: false
  }
}

function engagedDataReducer(state = initialState.engagedData, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_EMAIL_ENGAGED:
      return {
        ...state,
        email: payload
      }
    case SET_LOGIN_ENGAGED:
      return {
        ...state,
        login: payload
      }
    default:
      return state;
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

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  popup: engagedDataReducer,
  authorization: authReducer
});
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

export default store;