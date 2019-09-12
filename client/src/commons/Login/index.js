import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setAuthState } from '../../store';

import axios from 'axios';

import { ModalLogin } from './ModalLogin';

import './index.scss';

export const Login = connect(null, {setAuthState})((props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const submitHandler = async() => {
    await axios.post(window.location.origin + '/customers/auth', {login, password})
      .then(res => {
        if (res.data.auth) {
          setError(false);
          props.setAuthState(true);
          props.openModal(false);
        } else {
          setError(true);
          setLogin('');
          setPassword('');
        }
      });
  }

  return ReactDOM.createPortal(
    <ModalLogin
      openModal={props.openModal}
      login={{login, setLogin}}
      password={{password, setPassword}}
      submitHandler={submitHandler}
      error={error}
    />, document.body)
})
