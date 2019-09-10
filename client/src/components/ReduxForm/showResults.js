import axios from 'axios';
import store, { setEmailState, setLoginState, setAuthState } from '../../store';

export default async function showResults(values) {
  console.log(window.location.origin + '/customers');
  await axios.post(window.location.origin + '/customers', values)
    .then(res => {
      store.dispatch(setEmailState(false));
      store.dispatch(setLoginState(false));
      if (res.data.errors) {
        if (res.data.errors.email) { store.dispatch(setEmailState(true)) }
        if (res.data.errors.login) { store.dispatch(setLoginState(true)) }
      } else {
        store.dispatch(setAuthState(true));
      }
    });
};