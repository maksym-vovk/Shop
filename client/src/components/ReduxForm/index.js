import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import RegistrationForm from './RegistrationForm';
import { registerUser, setRegister } from '../../store'
import { EmptyPage } from '../EmptyPage';

const mapStateToProps = state => ({
  authorized: state.user.authorized,
  update_message: state.user.update_message
});

export const ReduxForm = connect(mapStateToProps, {
  registerUser,
  setRegister
})(props => {
  const [redirect, setRedirect] = useState(false);
  const { authorized, update_message, registerUser, setRegister, history } = props;
  const regSubmit = (values) => {
    const { password, ...customer } = values;
    const user = { password, customer };
    registerUser(user);
  };

  return (
    <div className="container">
      {
        !authorized
          ? (
            <React.Fragment>

              {
                update_message
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
              <RegistrationForm onSubmit={regSubmit} history={history}/>
            </React.Fragment>
          )
          : <EmptyPage text="You are already logged in"/>
      }
    </div>
  )
});
