import React from 'react';

import {connect} from 'react-redux';
import {Field, reduxForm, reset} from 'redux-form';

import './index.scss'
import {required, renderField, inputFocusBlur, match, minLength, onChangeTrimValue} from '../../ReduxForm/RegistrationForm';

const mapStateToProps = state => ({
  initialValues: {
    _id: state.user.user_id,
    last_password: state.user.last_password,
  }
});

const lastPassword = props => value =>
  (value !== props)
    ? 'Your password is invalid'
    : undefined;

const notMatch = matchName => (value, allValues) =>
  value === allValues[matchName]
    ? `This field must be not equal to ${matchName}`
    : undefined;

const EditPassword = props => {
  console.log(props);
  const { handleSubmit, submitting, reset } = props;
  const { last_password } = props.initialValues;

  return (
    <form className="change-information-form-wrap" onSubmit={handleSubmit}>
      <div className="form-group">
        <h3 className="change-information-title">Enter last password</h3>
        <Field
          type="password"
          name="Last password"
          label="Last password"
          component={renderField}
          validate={[required('last password'), lastPassword(last_password)]}
          onFocus={inputFocusBlur}
          onBlur={inputFocusBlur}
          normalize={onChangeTrimValue}
        />
      </div>

      <div className="form-group">
        <h3 className="change-information-title">Enter new password</h3>
        <Field
          type="password"
          name="password"
          label="Password"
          component={renderField}
          validate={[required('Password'), notMatch('Last password'), minLength(6)]}
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
      <div className="buttons-container">
        <button className="button edit-btn" type="submit" disabled={submitting}>
                    Save
        </button>
        <button className="button go-back-btn" onClick={(e) => {
          reset();
          props.history.goBack();
          e.preventDefault();
        }}>
                    Go back
        </button>
      </div>
    </form>
  )
};

const resetForm = (result, dispatch) => {
  dispatch(reset('passwordEditForm'));
};

export const ChangeUserPassword = connect(mapStateToProps)(reduxForm({
  form: 'passwordEditForm',
  onSubmitSuccess: resetForm,
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: false, // <------ unregister fields on unmount
})(EditPassword));