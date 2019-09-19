import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

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
  phoneNumber
} from '../../ReduxForm/RegistrationForm';

const mapStateToProps = state => ({
  initialValues: state.user.userData,
});

const asyncValidate = async(value) => {
  await axios.post('/find_user', {_id: value._id, login: value.login ? value.login : '', email: value.email ? value.email : ''})
    .then(res => {
      const errs = {};
      let show = false;
      for (const key in res.data) {
        if (res.data.email && res.data.email_id) {
          show = true;
          errs.email = 'This email is already registred'
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
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          editing={true}
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
          editing={true}
        />
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Age"
          validate={number}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
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
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          editing={true}
        />

        <Field
          name="country"
          type="text"
          component={renderField}
          label="Country"
          validate={required('Country')}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          editing={true}
        />

        <Field
          name="city"
          type="text"
          component={renderField}
          label="City"
          validate={required('City')}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          editing={true}
        />

        <Field
          name="zip_code"
          type="text"
          component={renderField}
          label="Zip code"
          validate={required('Zip code')}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          editing={true}
        />

        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address"
          validate={required('Address')}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          editing={true}
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
          editing={true}
        />
        <Field
          name="_id"
          type="text"
          component={renderField}
          label="id"
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          hide_id_field={true}
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