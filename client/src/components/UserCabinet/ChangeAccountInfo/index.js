import React from 'react';
import {reset} from 'redux-form';
import {connect} from 'react-redux';

import {updateUser, updateUserPassword, setMessageUser} from '../../../store';
import { ChangeUserInfo } from './ChangeUserInfo';
import {ShoppingInfoContainer} from '../ShoppingInfo/ShoppingInfoContainer'
import { ChangeUserPassword } from './ChangeUserPassword';

import './index.scss';

const mapStateToProps = state => ({
  user: state.user
});

const modalMessage = (event, props) => {
  if (props.user.update_message.correct) {
    props.setMessageUser(false);
    props.history.goBack();
    event.preventDefault();
  }
  props.setMessageUser(false);
};

export const ChangeUserInfoPage = connect(mapStateToProps, {updateUser, setMessageUser})(props => {
  const history = props.history;

  function editUserSubmit(values) {
    props.updateUser(values);
  }

  return (
    <React.Fragment>
      <div className="container">
        { props.user.update_message
          ? <div className="message__background">
            <div className="message__container">
              <div className="message__result">
                <p className={ props.user.update_message.correct ? 'message__updated-user' : 'message__error-update-user' }>
                  { props.user.update_message.correct ? props.user.update_message.correct : props.user.update_message.error }</p>
                <button className="button edit-btn" onClick={(e) => modalMessage(e, props)}>ok</button>
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

export const ChangeUserPasswordPage = connect(mapStateToProps, {updateUserPassword, setMessageUser})(props => {
  const history = props.history;

  const editUserPassword = (values) => {
    props.updateUserPassword(values);
    reset();
  };

  return (
    <React.Fragment>
      <div className="container">

        { props.user.update_message
          ? <div className="message__background">
            <div className="message__container">
              <div className="message__result">
                <p className={ props.user.update_message.correct ? 'message__updated-user' : 'message__error-update-user' }>
                  { props.user.update_message.correct ? props.user.update_message.correct : props.user.update_message.error }</p>
                <button className="button edit-btn" onClick={(e) => modalMessage(e, props)}>ok</button>
              </div>
            </div>
          </div>
          : null
        }

        { props.user.userData
          ? <div className="change-information-form">
            <ChangeUserPassword history={history} onSubmit={editUserPassword}/>
          </div>
          : <h1 className="addition-margin">404 Error you should login</h1>
        }

      </div>
      <ShoppingInfoContainer />
    </React.Fragment>
  )
});