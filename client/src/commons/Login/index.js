import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setUser, setUserPassword, setUserID } from '../../store';

import axios from 'axios';

import { ModalLogin } from './ModalLogin';

import './index.scss';

export const Login = connect(null, {setUser, setUserPassword, setUserID})((props) => {
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
          props.setUser(res.data.customer);
          props.setUserPassword(res.data.password);
          props.setUserID(res.data._id);
        }
      });
  };

  return ReactDOM.createPortal(
    <ModalLogin
      openModal={props.openModal}
      login={{login, setLogin}}
      password={{password, setPassword}}
      submitHandler={submitHandler}
      error={error}
    />, document.body)
})
