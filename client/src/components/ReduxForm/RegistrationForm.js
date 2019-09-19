import React from 'react'

import { Field, reduxForm } from 'redux-form'
import './index.scss'
import axios from 'axios';

// const required = value => (value || typeof value === 'number' ? undefined : 'Required field');
export const required = fieldName => value => (value || typeof value === 'number' ? undefined : `Please enter your ${fieldName}`);

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);

export const login = value =>
  value && !/^[\w[\]`!@#$%^&*()={}:;<>+'-]*$/i.test(value)
    ? 'Use english letters'
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const match = matchName => (value, allValues) =>
  value !== allValues[matchName]
    ? `This field must be equal to ${matchName}`
    : undefined;

const asyncValidate = async(value) => {
  await axios.post(window.location.origin + '/find_user', {login: value.login ? value.login : '', email: value.email ? value.email : ''})
    .then(res => {
      const errs = {};
      let show = false;
      for (const key in res.data) {
        if (res.data[key]) {
          show = true;
          errs[key] = 'Already registrated'
        }
      }
      if (show) { throw errs }
    })
};

export const onChangeTrimValue = value => {
  return value.trim();
};

export const phoneNumber = value => {
  return value.replace(/[^\d]/g, '');
};

export const inputFocusBlur = (event) => {
  const inputElement = event.target;
  const targetContainer = event.target.parentNode;

  const targetLabel = targetContainer.querySelector('.label-text');
  if (targetLabel.classList.contains('label-active')) {
    if (inputElement.value === '') {
      return targetLabel.classList.remove('label-active')
    } else return true
  }
  return targetLabel.classList.add('label-active');
};

export const renderField = ({
  input,
  label,
  type,
  editing,
  hide_id_field,
  meta: { asyncValidating, touched, error, warning }
}) => (
  <div className={ hide_id_field ? 'hidden-field' : 'options-container'}>
    <div className={asyncValidating ? 'input-container async-validating' : 'input-container'}>
      {editing
        ? <label htmlFor={label} className="label-text label-active">{label}</label>
        : <label htmlFor={label} className="label-text">{label}</label>
      }
      {
        (type === 'password')
          ? <input id={label} autoComplete="off" className="input-style" {...input} type={type} />
          : <input id={label} className="input-style" {...input} type={type} />
      }

    </div>
    {touched &&
    ((error && <div className="error-message">&#9432; {error}</div>) ||
      (warning && <div className="error-message">&#9432; {warning}</div>))}
  </div>
);

const RegistrationForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form className="registration-form-wrap" onSubmit={handleSubmit}>
      <div className="form-group">
        <h3 className="registration-title">User details</h3>
        <Field
          name="login"
          type="text"
          component={renderField}
          label="Login"
          validate={required('Login')}
          warn={login}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          normalize={onChangeTrimValue}
        />
        <Field
          name="first_name"
          type="text"
          component={renderField}
          label="Name"
          validate={[required('Name'), maxLength15, minLength2]}
          warn={alphaNumeric}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
        />
        <Field
          name="last_name"
          type="text"
          component={renderField}
          label="Surname"
          validate={[required('Surname'), maxLength15, minLength2]}
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
        <h3 className="registration-title">Enter password</h3>
        <Field
          type="password"
          name="password"
          label="Password"
          component={renderField}
          validate={[required('Password'), minLength(6)]}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          normalize={onChangeTrimValue}
        />
        <Field
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          component={renderField}
          validate={[required('Password again'), match('password')]}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          normalize={onChangeTrimValue}
        />
      </div>
      <div className="form-group">
        <h3 className="registration-title">Contact information</h3>
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
          name="country"
          type="text"
          component={renderField}
          label="Country"
          validate={required('Country')}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
        />

        <Field
          name="city"
          type="text"
          component={renderField}
          label="City"
          validate={required('City')}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
        />

        <Field
          name="zip_code"
          type="text"
          component={renderField}
          label="Zip code"
          validate={required('Zip code')}
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
        <button className="sign-up-btn" type="submit" disabled={submitting}>
          sign up
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'registrationForm', // a unique identifier for this form
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  asyncValidate,
  asyncChangeFields: ['login', 'email']
})(RegistrationForm)