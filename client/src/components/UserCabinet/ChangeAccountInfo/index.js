import React from 'react';
import {reset} from 'redux-form';
import {connect} from 'react-redux';

import {updateUser, updateUserPassword, setMessageUser} from '../../../store';
import { ChangeUserInfo } from './ChangeUserInfo';
import {ShoppingInfoContainer} from '../ShoppingInfo/ShoppingInfoContainer'
import { ChangeUserPassword } from './ChangeUserPassword';

import './index.scss';
import { EmptyPage } from '../../EmptyPage';

const mapStateToProps = state => ({
  authorized: state.user.authorized,
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
  const {history, authorized} = props;

  function editUserSubmit(values) {
    props.updateUser(values);
  }

  return (
    <div className="container">
      {
        authorized ? (
          <React.Fragment>
            <div className="page-title page-title-wrapper">
              <h2 className="">Edit your personal information</h2>
              <button className="button go-back-btn" onClick={(e) => {
                props.history.goBack();
                e.preventDefault();
              }}>
                Go back
              </button>
            </div>

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
            <ShoppingInfoContainer />
          </React.Fragment>
        )
          : <EmptyPage text="You should login to see this page"/>
      }
    </div>
  )
});

export const ChangeUserPasswordPage = connect(mapStateToProps, {updateUserPassword, setMessageUser})(props => {
  const { history, authorized } = props;

  const editUserPassword = (values) => {
    props.updateUserPassword(values);
    reset();
  };

  return (
    <div className="container">
      {
        authorized ? (
          <React.Fragment>
            <h2 className="page-title">Edit your password</h2>

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
            <ShoppingInfoContainer />
          </React.Fragment>
        )
          : <EmptyPage text="You should login to see this page"/>
      }
    </div>
  )
});