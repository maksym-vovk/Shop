import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setAuthState, setUser } from '../../store';

import axios from 'axios';

import { ModalLogin } from './ModalLogin';

import './index.scss';

export const Login = connect(null, {setAuthState, setUser})((props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const submitHandler = async(e) => {
    e.preventDefault();
    await axios.post(window.location.origin + '/customers/auth', {login, password})
      .then(res => {
        if (res.data.err) {
          setError(true);
          setLogin('');
          setPassword('');
        } else {
          setError(false);
          props.openModal(false);
          props.setAuthState(true);
          props.setUser(res.data);
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
