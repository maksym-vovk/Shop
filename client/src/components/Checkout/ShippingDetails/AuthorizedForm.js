import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import { required } from '../../ReduxForm/RegistrationForm';
import {CartButton} from '../../Cart/CartButton';
import {
  alphaNumeric,
  aol,
  email,
  isLetter,
    // required,
  maxLength15,
  maxLength5,
  minLength,
  minLength2, phoneNumber,
  renderFieldShipping
} from './UnAuthorizedForm';

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

const mapStateToProps = state => ({
  initialValues: state.user.userData,
});

const AuthorizedForm = props => {
  const {handleSubmit, submitting} = props;

  return (

    <form className="shipping__form" onSubmit={handleSubmit}>
      <Field
        name="first_name"
        component={renderFieldShipping}
        type="text"
        label="First Name"
        validate={[required('Name'), isLetter, maxLength15, minLength2]}
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
        validate={[required('Surname'), isLetter, maxLength15, minLength2]}
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
        validate={[required('Address'), minLength2]}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />
      <Field
        name="zip_code"
        component={renderFieldShipping}
        type="text"
        label="Zip Code"
        validate={[required('Zip code'), maxLength5, minLength2]}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />
      <Field
        name="city"
        component={renderFieldShipping}
        type="text"
        label="City"
        validate={[required('City'), isLetter, minLength2]}
        onFocus={inputFocusShipping}
        onBlur={inputBlurShipping}
        editing={true}
      />

      <Field
        name="country"
        component={renderFieldShipping}
        type="text"
        label="Country"
        validate={[required('Country'), isLetter, minLength2]}
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
          validate={[required('Email'), email]}
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
          validate={[required('Phone'), minLength(7)]}
          normalize={phoneNumber}
          onFocus={inputFocusShipping}
          onBlur={inputBlurShipping}
          editing={true}
        />
        <p className="shipping__notice"> The phone number you enter can’t be changed after you place your
                    order, so please make sure it’s correct.</p>
      </div>
      <div className="shipping__button-wrapper">
        <CartButton disabled={submitting} title="Buy"/>
      </div>
    </form>
  )
};

export const AuthShippingDetails = connect(mapStateToProps)(reduxForm({
  form: 'AuthShippingDetails',
    destroyOnUnmount: false, //        <------ preserve form data
})(AuthorizedForm));
