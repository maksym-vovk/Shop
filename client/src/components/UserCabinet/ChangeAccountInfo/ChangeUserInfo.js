import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import axios from 'axios';

import {
  required,
  renderField,
  minLength,
  minLength2,
  maxLength,
  alphaNumeric,
  aol,
  email,
  phoneNumber
} from '../../ReduxForm/RegistrationForm';

const mapStateToProps = state => ({
  initialValues: {
    ...state.user.userData,
    _id: state.user.user_id
  },
});

export const inputFocus = (event) => {
  const targetContainer = event.target.parentNode;

  const targetLabel = targetContainer.querySelector('.label-text');
  return targetLabel.classList.add('label-active')
};

export const inputBlur = (event) => {
  const inputElement = event.target;
  const targetContainer = event.target.parentNode;
  const targetLabel = targetContainer.querySelector('.label-text');

  if (targetLabel.classList.contains('label-active')) {
    if (inputElement.value === '') {
      return targetLabel.classList.remove('label-active')
    } else return true
  }
};

const asyncValidate = async(value) => {
  await axios.post('/find_user', {_id: value._id, login: value.login ? value.login : '', email: value.email ? value.email : ''})
    .then(res => {
      const errs = {};
      let show = false;
      // eslint-disable-next-line no-unused-vars
      for (const key in res.data) {
        if (res.data.email && res.data.email_id) {
          show = true;
          errs.email = 'This email is already registered'
        }
      }
      if (show) throw errs
    })
};

const EditUserInfo = props => {
  const { handleSubmit, submitting } = props;

  return (
    <form className="change-information-form-wrap" onSubmit={handleSubmit}>
      <div className="form-group">
        <h3 className="change-information-title">User details</h3>
        <Field
          name="first_name"
          type="text"
          component={renderField}
          label="Name"
          validate={[required('Name'), maxLength(15), minLength2]}
          warn={alphaNumeric}
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />
        <Field
          name="last_name"
          type="text"
          component={renderField}
          label="Surname"
          validate={[required('Surname'), maxLength(15), minLength2]}
          warn={alphaNumeric}
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Age"
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />
      </div>

      <div className="form-group">
        <h3 className="change-information-title">Contact information</h3>
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          validate={[required('Email address'), email]}
          warn={aol}
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />

        <Field
          name="country"
          type="text"
          component={renderField}
          label="Country"
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />

        <Field
          name="city"
          type="text"
          component={renderField}
          label="City"
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />

        <Field
          name="zip_code"
          type="text"
          component={renderField}
          label="Zip code"
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />

        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address"
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />
        <Field
          name="phone"
          type="text"
          component={renderField}
          label="Phone number"
          validate={[required('Phone number'), minLength(7)]}
          normalize={phoneNumber}
          onFocus={inputFocus}
          onBlur={inputBlur}
          editing={true}
        />

      </div>
      <div className="buttons-container">
        <button className="button edit-btn" type="submit" disabled={submitting}>
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

  )
};

export const ChangeUserInfo = connect(mapStateToProps)(reduxForm({
  form: 'userInfoEditForm',
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
  asyncValidate,
  asyncBlurFields: ['email']
})(EditUserInfo));