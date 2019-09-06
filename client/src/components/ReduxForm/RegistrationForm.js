import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './index.scss'

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min} years` : undefined;
const minValue10 = minValue(10);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined
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
export const phoneNumber = value =>
  value && !/^([0-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="options-container">
    <div className="options-field">
      <label>{label}</label>
      <div className="input-container">
        <input className="input-style" {...input} type={type} />
      </div>
    </div>
    {touched &&
    ((error && <div className="error-message">{error}</div>) ||
      (warning && <div className="error-message">{warning}</div>))}
  </div>
);

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Name"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="userSurname"
        type="text"
        component={renderField}
        label="Surname:"
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
        validate={[required, number, minValue10]}
        warn={tooYoung}
      />
      <Field
        name="phone"
        type="number"
        component={renderField}
        label="Phone number"
        validate={[required, phoneNumber]}
      />
      <div>
        <button className="" type="submit" disabled={submitting}>
                    Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
        </button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(FieldLevelValidationForm)