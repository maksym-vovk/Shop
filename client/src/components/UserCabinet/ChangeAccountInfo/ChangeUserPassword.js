import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {ShoppingInfoContainer} from '../ShoppingInfo/ShoppingInfoContainer';

import './index.scss'
import {required, renderField, inputFocusBlur, match, minLength} from '../../ReduxForm/RegistrationForm';

const mapStateToProps = state => ({
  test_pass: 'testpass'
});

const lastPassword = props => value =>
  (value !== props)
    ? 'Your password is invalid'
    : undefined;

const EditPassword = connect(mapStateToProps)(props => {
  console.log(props);
  return (
    <React.Fragment>
      <div className="container">
        <div className="change-information-form">
          <form >
            <div className="form-group">
              <h3>Enter last password</h3>
              <Field
                type="password"
                name="LastPassword"
                label="Last password"
                component={renderField}
                validate={[required('last password'), lastPassword(props.test_pass)]}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
            </div>

            <div className="form-group">
              <h3>Enter new password</h3>
              <Field
                type="password"
                name="password"
                label="Password"
                component={renderField}
                validate={[required('Password'), minLength(6)]}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
              <Field
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                component={renderField}
                validate={[required('Password again'), match('password')]}
                onFocus={inputFocusBlur}
                onBlur={inputFocusBlur}
              />
            </div>
            <div>
              <button className="button edit-btn" type="submit" onClick={(e) => {
                console.log('submit');
                e.preventDefault()
              }}>
                    Edit password
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

export const ChangeUserPassword = reduxForm({
  form: 'passwordEditForm',
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(EditPassword);