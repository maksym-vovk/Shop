import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import './index.scss'
import {required, renderField, inputFocusBlur, match, minLength} from '../../ReduxForm/RegistrationForm';

const mapStateToProps = state => ({
  user_password: state.user.userData.password,
});

const lastPassword = props => value =>
  (value !== props)
    ? 'Your password is invalid'
    : undefined;

const EditPassword = connect(mapStateToProps)(props => {
  const { handleSubmit, submitting } = props;

  return (
    <form className="change-information-form-wrap" onSubmit={handleSubmit}>
      <div className="form-group">
        <h3 className="change-information-title">Enter last password</h3>
        <Field
          type="password"
          name="LastPassword"
          label="Last password"
          component={renderField}
          validate={[required('last password'), lastPassword(props.user_password)]}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
        />
      </div>

      <div className="form-group">
        <h3 className="change-information-title">Enter new password</h3>
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
});

export const ChangeUserPassword = reduxForm({
  form: 'passwordEditForm',
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(EditPassword);