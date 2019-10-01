import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

// styles
import './index.scss';

const mapStateToProps = state => ({
  initialValues: state.user.userData,
});

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

const inputFocusBlurShipping = (event) => {
  const inputElement = event.target;
  const targetContainer = event.target.parentNode;

  const targetLabel = targetContainer.querySelector('.label-placehold');
  if (targetLabel.classList.contains('label-placehold-active')) {
    if (inputElement.value === '') {
      return targetLabel.classList.remove('label-placehold-active')
    } else return true
  }
  return targetLabel.classList.add('label-placehold-active');
};

const inputFocusShipping = (event) => {
  const targetContainer = event.target.parentNode;

  const targetLabel = targetContainer.querySelector('.label-placehold');
  return targetLabel.classList.add('label-placehold-active');
};

const inputBlurShipping = (event) => {
  const inputElement = event.target;
  const targetContainer = event.target.parentNode;

  const targetLabel = targetContainer.querySelector('.label-placehold');
  if (targetLabel.classList.contains('label-placehold-active')) {
    if (inputElement.value === '') {
      return targetLabel.classList.remove('label-placehold-active')
    } else return true
  }
};

const renderFieldShipping = ({type, editing, label, input, meta: {touched, error}}) => (
  <div className="input-row">
    {editing
      ? <label htmlFor={label} className="label-placehold label-placehold-active">{label}</label>
      : <label htmlFor={label} className="label-placehold">{label}</label>
    }
    <input className="input-styled" {...input} type={type}/>
    {touched && error &&
      <span className="error">&#9432; {error}</span>}
  </div>
);

const authorizedShippingDetailsForm = props => {
  const {handleSubmit, submitting} = props;
  return (

    <form className="shipping__form" onSubmit={handleSubmit}>
      <Field
        name="first_name"
        component={renderFieldShipping}
        type="text"
        label="First Name"
        validate={[required, isLetter, maxLength15, minLength2]}
        warn={alphaNumeric}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />
      <Field
        name="last_name"
        component={renderFieldShipping}
        type="text"
        label="Last Name"
        validate={[required, isLetter, maxLength15, minLength2]}
        warn={alphaNumeric}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />
      <Field
        name="address"
        component={renderFieldShipping}
        type="text"
        label="Street Address"
        validate={[required, minLength2]}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />
      <Field
        name="zip_code"
        component={renderFieldShipping}
        type="text"
        label="Zip Code"
        validate={[required, maxLength5, minLength2]}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />
      <Field
        name="city"
        component={renderFieldShipping}
        type="text"
        label="City"
        validate={[required, isLetter, minLength2]}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />

      <Field
        name="country"
        component={renderFieldShipping}
        type="text"
        label="Country"
        validate={[required, isLetter, minLength2]}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
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
          onFocus={inputFocusShipping}
          onBlur={inputBlurShipping}
          editing={true}
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
          onFocus={inputFocusShipping}
          onBlur={inputBlurShipping}
          editing={true}
        />
        <p className="shipping__notice"> The phone number you enter can’t be changed after you place your
                    order, so please make sure it’s correct.</p>
      </div>
      <div className="shipping__button-wrapper">
        <button className="shipping__button" type="submit" disabled={submitting}>Buy</button>
      </div>
    </form>
  )
};

const ShippingDetailsFunction = props => {
  const {handleSubmit, submitting, authorized} = props;

  return (
    <div className="shipping container">
      <h1 className="shipping__title">Where should we send your order?</h1>
      <h2 className="shipping__subtitle">Enter your name and address:</h2>
      {
        authorized
          ? authorizedShippingDetailsForm(props)
          : <form className="shipping__form" onSubmit={handleSubmit}>
            <Field
              name="first_name"
              component={renderFieldShipping}
              type="text"
              label="First Name"
              validate={[required, isLetter, maxLength15, minLength2]}
              warn={alphaNumeric}
              onFocus={inputFocusBlurShipping}
              onBlur={inputFocusBlurShipping}
            />
            <Field
              name="last_name"
              component={renderFieldShipping}
              type="text"
              label="Last Name"
              validate={[required, isLetter, maxLength15, minLength2]}
              warn={alphaNumeric}
              onFocus={inputFocusBlurShipping}
              onBlur={inputFocusBlurShipping}
            />
            <Field
              name="address"
              component={renderFieldShipping}
              type="text"
              label="Street Address"
              validate={[required, minLength2]}
              onFocus={inputFocusBlurShipping}
              onBlur={inputFocusBlurShipping}
            />
            <Field
              name="zip_code"
              component={renderFieldShipping}
              type="text"
              label="Zip Code"
              validate={[required, maxLength5, minLength2]}
              onFocus={inputFocusBlurShipping}
              onBlur={inputFocusBlurShipping}
            />
            <Field
              name="city"
              component={renderFieldShipping}
              type="text"
              label="City"
              validate={[required, isLetter, minLength2]}
              onFocus={inputFocusBlurShipping}
              onBlur={inputFocusBlurShipping}
            />

            <Field
              name="country"
              component={renderFieldShipping}
              type="text"
              label="Country"
              validate={[required, isLetter, minLength2]}
              onFocus={inputFocusBlurShipping}
              onBlur={inputFocusBlurShipping}
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
                onFocus={inputFocusBlurShipping}
                onBlur={inputFocusBlurShipping}
              />
              <p className="shipping__notice">We’ll email you a receipt and send order updates to your
                                mobile
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
                onFocus={inputFocusBlurShipping}
                onBlur={inputFocusBlurShipping}
              />
              <p className="shipping__notice"> The phone number you enter can’t be changed after you place
                                your
                                order, so please make sure it’s correct.</p>
            </div>
            <div className="shipping__button-wrapper">
              <button className="shipping__button" type="submit" disabled={submitting}>Buy</button>
            </div>
          </form>
      }
    </div>
  );
};

export const ShippingDetails = connect(mapStateToProps)(reduxForm({
  form: 'shippingDetails'
})(ShippingDetailsFunction));
