import React from 'react';
import {Field, reduxForm} from 'redux-form';

// styles
import './index.scss';

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength5 = maxLength(5);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);

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
export const phoneNumber = value => {
  return value.replace(/[^\d]/g, '');
};

export const isLetter = value =>
  value && !/[a-zA-Z]/.test(value)
    ? 'Invalid value, must be letters only'
    : undefined;

const renderFieldShipping = ({type, label, input, meta: {touched, error}}) => (
  <div className="input-row">
    {/* <label htmlFor={label} className="label">{label}</label> */}
    <input {...input} type={type} />
    {touched && error &&
        <span className="error">&#9432; {error}</span>}
  </div>
);

const ShippingDetailsFunction = props => {
  const {handleSubmit, submitting} = props;
  return (
    <div className="shipping container">
      <h1 className="shipping__title">Where should we send your order?</h1>
      <h2 className="shipping__subtitle">Enter your name and address:</h2>

      <form className="shipping__form" onSubmit={handleSubmit}>
        <Field
          name="firstName"
          component={renderFieldShipping}
          type="text"
          label="First Name"
          validate={[required, isLetter, maxLength15, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="lastName"
          component={renderFieldShipping}
          type="text"
          label="Last Name"
          validate={[required, isLetter, maxLength15, minLength2]}
          warn={alphaNumeric}
        />
        <Field
          name="address"
          component={renderFieldShipping}
          type="text"
          label="Street Address"
          validate={[required, minLength2]}
        />
        <Field
          name="zipCode"
          component={renderFieldShipping}
          type="text"
          label="Zip Code"
          validate={[required, maxLength5, minLength2]}
        />
        <Field
          name="city"
          component={renderFieldShipping}
          type="text"
          label="City"
          validate={[required, isLetter, minLength2]}
        />
        <Field
          name="region"
          component={renderFieldShipping}
          type="text"
          label="Region"
          validate={[required, isLetter, minLength2]}
        />
        <Field
          name="country"
          component={renderFieldShipping}
          type="text"
          label="Country"
          validate={[required, isLetter, minLength2]}
        />

        <h2 className="shipping__subtitle">What's your contact information?</h2>
        <div className="shipping__form-wrapper">
          <Field
            name="email"
            component={renderFieldShipping}
            type="email"
            label="Email"
            validate={email}
            warn={aol}
          />
          <p className="shipping__notice">We’ll email you a receipt and send order updates to your mobile
                        phone via SMS or iMessage.</p>
        </div>
        <div className="shipping__form-wrapper">
          <Field
            name="phone"
            component={renderFieldShipping}
            type="tel"
            label="Phone Number"
            validate={[required, minLength(7)]}
            normalize={phoneNumber}
          />
          <p className="shipping__notice"> The phone number you enter can’t be changed after you place your
                        order, so please make sure it’s correct.</p>
        </div>
        <button className="shipping__button" type="submit" disabled={submitting}>Buy</button>
      </form>
    </div>
  );
};

export const ShippingDetails = reduxForm({
  form: 'shippingDetails'
})(ShippingDetailsFunction);
