import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import RegistrationForm from './RegistrationForm';
import { Preloader } from '../Preloader';
import { registerUser, setRegister } from '../../store'
import { EmptyPage } from '../EmptyPage';

const mapStateToProps = state => ({
  authorized: state.user.authorized,
  registration: state.user.registration
});

export const ReduxForm = connect(mapStateToProps, {
  registerUser,
  setRegister
})(props => {
  const [redirect, setRedirect] = useState(false);
  console.log(props);
  const { authorized, registration, registerUser, setRegister } = props;
  const regSubmit = (values) => {
    registerUser(values);
  };

  return (
    <div className="container">
      {
        !authorized
          ? (
            <React.Fragment>
              <div className="page-title page-title-wrapper">
                <h2 className="">Registration</h2>
                <button className="button go-back-btn" onClick={(e) => {
                  props.history.goBack();
                  e.preventDefault();
                }}>
                Go back
                </button>
              </div>
              <div className="registration-form">
                {
                  registration
                    ? (
                      <div className="register-modal">
                        <div className="register-modal__message-wrap">
                          <p>Account successfully created</p>
                          <button className="button" onClick={(e) => {
                            setRegister(false);
                            setRedirect(true);
                            e.preventDefault();
                          }}>ok
                          </button>
                        </div>
                      </div>
                    )
                    : null
                }
                {redirect ? <Redirect to="/"/> : null}
                <RegistrationForm onSubmit={regSubmit}/>
              </div>
            </React.Fragment>
          )
          : <EmptyPage text="You are already logged in"/>
      }

      <Preloader/>
    </div>
  )
});
