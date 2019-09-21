import React, {useState} from 'react';

import {connect} from 'react-redux';
import {updateUser} from '../../../store'
import { ChangeUserInfo } from './ChangeUserInfo';
import {ShoppingInfoContainer} from '../ShoppingInfo/ShoppingInfoContainer'
import { ChangeUserPassword } from './ChangeUserPassword';

import './index.scss';

export const ChangeUserInfoPage = connect(null, {updateUser})(props => {
  const history = props.history;
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState(false);

  function editUserSubmit(values) {
    props.updateUser(values);
  }

  return (
    <React.Fragment>
      <div className="container">
        {messageStatus
          ? <div className="message__background">
            <div className="message__container">
              <div className="message__result">
                { message }
                <button className="button edit-btn" onClick={() => setMessageStatus(false)}>ok</button>
              </div>
            </div>
          </div>
          : null
        }
        <div className="change-information-form">
          <ChangeUserInfo history={history} onSubmit={editUserSubmit}/>
        </div>
      </div>
      <ShoppingInfoContainer />
    </React.Fragment>
  )
});

export const ChangeUserPasswordPage = (props) => {
  const history = props.history;
  async function editUserPassword(values) {
    console.log(values)
  }

  return (
    <React.Fragment>

      <div className="container">
        <div className="change-information-form">

          <ChangeUserPassword history={history} onSubmit={editUserPassword}/>

        </div>
      </div>

      <ShoppingInfoContainer />

    </React.Fragment>
  )
};