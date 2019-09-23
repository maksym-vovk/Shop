import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const UserPanelModal = props => {
  return (
    <div className="user-modal">
      <div className="user-modal__name-block">
        <p className="user-modal__name-text">{props.name}</p>
        <p className="user-modal__name-text">{props.surname}</p>
      </div>
      <div className="user-modal__link-block">
        <Link to="/order_history" className="user-modal__link" onClick={() => props.modal(false)}>Orders history</Link>
        <Link to="/user_cabinet" className="user-modal__link" onClick={() => props.modal(false)}>Account</Link>
      </div>
      <div className="user-modal__logout-block">
        <button className="user-modal__logout" onClick={props.logout}>Sign out</button>
      </div>
    </div>
  )
}