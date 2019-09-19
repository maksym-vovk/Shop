import React, {useState} from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {setUser} from '../../../store'
import { ChangeUserInfo } from './ChangeUserInfo';
import {ShoppingInfoContainer} from '../ShoppingInfo/ShoppingInfoContainer'
import { ChangeUserPassword } from './ChangeUserPassword';

import './index.scss';

export const ChangeUserInfoPage = connect(null, {setUser})(props => {
  const history = props.history;
  const [message, setMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState(false);

  async function editUserSubmit(values) {
    await axios.put(window.location.origin + '/customers/' + values._id, values)
      .then(res => {
        if (res.data.updated) {
          props.setUser(res.data.user);
          setMessage('Your personal information changed');
        } else {
          setMessage(res.data.error_message);
        }
        setMessageStatus(true);
      })
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