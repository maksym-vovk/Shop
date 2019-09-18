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
  }

  return (
    <div className="container">
      <div className="registration-form">
        {redirect ? <Redirect to="/" /> : null}
        <h2>Registration</h2>
        <RegistrationForm onSubmit={regSubmit} />
      </div>
    </div>
  )
};