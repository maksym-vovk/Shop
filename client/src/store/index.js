import { createStore, combineReducers } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import rootReducer from '../reducers'

// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });
const store = (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(rootReducer);

export default store;