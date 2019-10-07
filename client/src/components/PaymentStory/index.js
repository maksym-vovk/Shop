import React from 'react';

import { connect } from 'react-redux'
import {OrderList} from './OrderList';
import { EmptyPage } from '../EmptyPage';

const mapStateToProps = state => ({
  authorized: state.user.authorized
});

export const PaymentStory = connect(mapStateToProps)(props => {
  const {authorized} = props;
  return (
    <div className="container">
      {
        authorized
          ? <React.Fragment>
            <div className="page-title page-title-wrapper">
              <h2 className="">Your order history</h2>
              <button className="button go-back-btn" onClick={(e) => {
                props.history.goBack();
                e.preventDefault();
              }}>
                Go back
              </button>
            </div>

            <OrderList />
          </React.Fragment>
          : <EmptyPage text="You should login to check order history"/>
      }

    </div>
  )
});