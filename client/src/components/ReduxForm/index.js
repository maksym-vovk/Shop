import React from 'react';

import showResults from './showResults';
import FieldLevelValidationForm from './RegistrationForm';

export const RegisterForm = () => {
  return (
    <div style={{ padding: 15, minWidth: '270px'}}>
      <h2>Registration</h2>
      <FieldLevelValidationForm onSubmit={showResults} />
    </div>
  )
};