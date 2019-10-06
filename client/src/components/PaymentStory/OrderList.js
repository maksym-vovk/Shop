import React, { useState, useEffect } from 'react';

import {connect} from 'react-redux';
import {setUserOrders} from '../../store';
import {EmptyPage} from '../EmptyPage'
import {OrderItem} from './OrderItem';
import { Lines } from 'react-preloaders';

const mapStateToProps = state => ({
  userOrders: state.user.userOrders,
  user_id: state.user.userData._id
});

export const OrderList = connect(mapStateToProps, {setUserOrders})(props => {
  const [loading, setLoading] = useState(true);
  const {user_id, userOrders, setUserOrders} = props;
  /* eslint-disable */
  useEffect(() => {
    setUserOrders(user_id);
    setLoading(false)
  }, []);
  /* eslint-enable */
  const renderOrderItems = array => {
    return array.map(order =>
      <OrderItem cart={order.cart} orderDate={order.orderDate} orderStatus={order.orderStatus} key={order._id}/>
    )
  };

  return (
    <React.Fragment>
      {userOrders
        ? renderOrderItems(userOrders)
        : <EmptyPage text="Order history is empty"/>
      }
      <Lines customLoading={loading} time={300}/>
    </React.Fragment>
  )
});