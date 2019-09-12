import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import showResults from './showResults';
import FieldLevelValidationForm from './RegistrationForm';

const mapStateToProps = state => ({
  email: state.popup.email,
  login: state.popup.login,
  auth: state.authorization.authorized
})

export const RegisterForm = connect(mapStateToProps)(props => {
  return (
    <div style={{ padding: 15, minWidth: '270px'}}>
      
      {props.auth ? <Redirect to="/" /> : null}
      
      <h2>Registration</h2>
      {props.login
        ? <div className="err-popup"><p>This login is already registrated</p></div>
        : null}
      {props.email
        ? <div className="err-popup"><p>This email is already registrated</p></div>
        : null}
      <FieldLevelValidationForm onSubmit={showResults} />
    </div>
  )
});