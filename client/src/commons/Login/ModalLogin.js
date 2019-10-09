import React from 'react';
import { Link } from 'react-router-dom';

export const ModalLogin = (props) => {
  return (
    <div className="outer" onClick={(e) => { if (e.target.className === 'outer') props.openModal(false) }}>
      <div className="modal">
        <span className="modal__close" onClick={() => props.openModal(false) }>&times;</span>
        <h2>Enter your account</h2>
        {props.error
          ? <div className="err-popup"><p>Wrong login or password</p></div>
          : null}
        <form className="modal__form" onSubmit={ props.submitHandler } autocomplete="off">
          <div className="modal__field">
            <label htmlFor="login">Login:</label>
            <input type="text" name="login" className="modal__input" onChange={ e => props.login.setLogin(e.target.value) } value={ props.login.login } />
          </div>
          <div className="modal__field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className="modal__input" onChange={ e => props.password.setPassword(e.target.value) } value={ props.password.password } />
          </div>
          <div className="modal__field">
            <button className="modal__submit">Login</button>
          </div>
        </form>
        <span>or</span>
        <Link to="/sign_up" onClick={() => props.openModal(false) }>Sign up</Link>
      </div>
    </div>
  )
}