import React from 'react'

import { Field, reduxForm } from 'redux-form'
import './index.scss'
import axios from 'axios';

const required = value => (value || typeof value === 'number' ? undefined : 'Required field');

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);

const login = value =>
  value && !/[\w[\]`!@#$%^&*()={}:;<>+'-]*$/i.test(value)
    ? 'Use english letters'
    : undefined;

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

const match = matchName => (value, allValues) =>
  value !== allValues[matchName]
    ? `This field must be equal to ${matchName}`
    : undefined;

const asyncValidate = async(login) => {
  await axios.post(window.location.origin + '/find_user', login)
    .then(res => {
      if (res.data[0]) {
        console.log(res.data[0]);
        throw {login: 'That login is taken'}
      }
    })
};

export const phoneNumber = value => {
  return value.replace(/[^\d]/g, '');
};

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error, warning }
}) => (
  <div className="options-container">
    <div className="options-field">
      <label>{label}<span className="required-field">*</span></label>
      <div className={asyncValidating ? 'input-container async-validating' : 'input-container'}>
        {
          (type === 'password') ? <input autoComplete="off" className="input-style" {...input} type={type} />
            : <input className="input-style" {...input} type={type} />
        }
      </div>
    </div>
    {touched &&
    ((error && <div className="error-message">{error}</div>) ||
      (warning && <div className="error-message">{warning}</div>))}
  </div>
);

const FieldLevelValidationForm = props => {
  console.log(props);

  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="login"
        type="text"
        component={renderField}
        label="Login"
        validate={[required, login]}
      />

      <Field
        name="first_name"
        type="text"
        component={renderField}
        label="Name"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="last_name"
        type="text"
        component={renderField}
        label="Surname"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        type="password"
        name="password"
        label="Password"
        component={renderField}
        validate={[required, minLength(6)]}
      />
      <Field
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        component={renderField}
        validate={[required, match('password')]}
      />

      <div className="options-container">
        <div className="options-field">
          <label>Gender</label>
          <div className="input-container">
            <Field name="gender" component="select" className="select-options">
              <option value="None">None</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
          </div>
        </div>
      </div>

      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
        warn={aol}
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="Age"
        validate={[required, number]}
      />
      <Field
        name="address"
        type="text"
        component={renderField}
        label="Address"
        validate={required}
      />
      <Field
        name="phone"
        type="text"
        component={renderField}
        label="Phone number"
        validate={[required, minLength(7)]}
        normalize={phoneNumber}
      />
      <div>
        <button className="sign-up-btn" type="submit" disabled={submitting}>
          sign up
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  asyncValidate,
  asyncBlurFields: ['login']
})(FieldLevelValidationForm)