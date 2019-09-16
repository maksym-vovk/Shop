import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {ShoppingInfoContainer} from '../ShoppingInfo/ShoppingInfoContainer';

import './index.scss';
import axios from 'axios';

import {
  required,
  renderField,
  inputFocusBlur,
  minLength,
  minLength2,
  maxLength,
  alphaNumeric,
  aol,
  number,
  email,
  login,
  phoneNumber
} from '../../ReduxForm/RegistrationForm';

const mapStateToProps = state => ({
  test_pass: 'testpass'
});

const asyncValidate = async(value) => {
  await axios.post('/find_user', {_id: '5d74f594a35f5f4c9414bcb5', login: value.login ? value.login : '', email: value.email ? value.email : ''})
    .then(res => {
      const errs = {};
      for (const key in res.data) {
        if (res.data.login && res.data.login_id) {
          errs.login = 'This login is already registred'
        }
        if (res.data.email && res.data.email_id) {
          errs.email = 'This email is already registred'
        }
      }
      throw errs
    })
};

const EditUserInfo = connect(mapStateToProps)(props => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="change-information-form">
          <form >
            <div className="form-group">
              <h3>User details</h3>
              <Field
                name="login"
                type="text"
                component={renderField}
                label="Login"
                validate={required('Login')}
                warn={login}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
              <Field
                name="first_name"
                type="text"
                component={renderField}
                label="Name"
                validate={[required('Name'), maxLength(15), minLength2]}
                warn={alphaNumeric}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
              <Field
                name="last_name"
                type="text"
                component={renderField}
                label="Surname"
                validate={[required('Surname'), maxLength(15), minLength2]}
                warn={alphaNumeric}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
              <Field
                name="age"
                type="number"
                component={renderField}
                label="Age"
                validate={number}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
            </div>

            <div className="form-group">
              <h3>Contact information</h3>
              <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
                validate={[required('Email address'), email]}
                warn={aol}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />

              <Field
                name="address"
                type="text"
                component={renderField}
                label="Address"
                validate={required('Address')}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
              <Field
                name="phone"
                type="text"
                component={renderField}
                label="Phone number"
                validate={[required('Phone number'), minLength(7)]}
                normalize={phoneNumber}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
            </div>
            <div>
              <button className="button edit-btn" type="submit" onClick={(e) => {
                console.log('submit');
                e.preventDefault()
              }}>
                                Save
              </button>
              <button className="button go-back-btn" onClick={(e) => {
                props.history.goBack();
                e.preventDefault();
              }}>
                                Go back
              </button>
            </div>
          </form>
        </div>
      </div>
      <ShoppingInfoContainer />
    </React.Fragment>
  )
});

export const ChangeUserInfo = reduxForm({
  form: 'userInfoEditForm',
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  asyncValidate,
  asyncBlurFields: ['login', 'email']
})(EditUserInfo);