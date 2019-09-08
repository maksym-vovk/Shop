import axios from 'axios';

export default (async function showResults(values) {
  console.log(window.location.origin + '/customers');
  await axios.post(window.location.origin + '/customers', values)
    .then(res => {
      if (res.data.errors) {
        let message = '';
        for (const key in res.data.errors) {
          message += `${key} ${res.data.errors[key].message} \n`;
        }
        alert(message);
      } else {
        window.location = '/'
      }
    });
});