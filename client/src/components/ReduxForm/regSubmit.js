import axios from 'axios';

export default async function regSubmit(values) {
  console.log(window.location.origin + '/customers');
  await axios.post(window.location.origin + '/customers', values)
    .then(res => alert('Grats'))
};
