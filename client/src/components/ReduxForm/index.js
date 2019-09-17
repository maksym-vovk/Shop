import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import RegistrationForm from './RegistrationForm';

export const RegisterForm = () => {
  const [redirect, setRedirect] = useState(false);
  async function regSubmit(values) {
    console.log(window.location.origin + '/customers');
    await axios.post(window.location.origin + '/customers', values)
      .then(res => { if (res.data.res) setRedirect(true) })
  };

  return (
    <div style={{ padding: 15, minWidth: '270px'}}>
      
      {redirect ? <Redirect to="/" /> : null}
      
      <h2>Registration</h2>

      <RegistrationForm onSubmit={regSubmit} />
    </div>
  )
};