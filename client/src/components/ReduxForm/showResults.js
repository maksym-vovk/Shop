import axios from 'axios';
import store, { setEmailState, setLoginState, setAuthState } from '../../store';

export default async function showResults(values) {
  console.log(window.location.origin + '/customers');
  await axios.post(window.location.origin + '/customers', values)
    .then(res => {
      console.log(res.data);
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

export const getUser = async(login) => {
  console.log(login);
  await axios.post(window.location.origin + '/find_user', {login})
    .then(res => {
      if (res.data[0]) {
        console.log(res.data[0]);
        return true;
      }
      console.log('ret fa')
      return false
    })
}