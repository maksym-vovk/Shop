import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import showResults from './showResults';
import FieldLevelValidationForm from './RegistrationForm';

const mapStateToProps = state => ({
  auth: state.authorization.authorized
});

export const RegisterForm = connect(mapStateToProps)(props => {
  return (
    <div style={{ padding: 15, minWidth: '270px'}}>
      
      {props.auth ? <Redirect to="/" /> : null}
      
      <h2>Registration</h2>

      <FieldLevelValidationForm onSubmit={showResults} />
    </div>
  )
});