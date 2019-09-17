import {createStore} from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers.js';
import { rootSaga } from './actions.js';

// getters
export const getAuthState = state => {
  return state.authorized;
};

const saga = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(saga)));

saga.run(rootSaga);


export default store;
export * from './actions.js';