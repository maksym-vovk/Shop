import axios from 'axios';
import store, { setAuthState } from '../../store';

export default async function regSubmit(values) {
  await axios.post(window.location.origin + '/customers', values)
    .then(res => {
      store.dispatch(setAuthState(true));
    });
};
