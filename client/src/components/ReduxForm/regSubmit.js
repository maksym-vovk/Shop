import axios from 'axios';
import store, { setAuthState } from '../../store';

export default async function regSubmit(values) {
  console.log(window.location.origin + '/customers');
  await axios.post(window.location.origin + '/customers', values)
    .then(res => {
      store.dispatch(setAuthState(true));
    });
};
