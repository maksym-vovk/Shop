import React, { useEffect } from 'react';

import {connect} from 'react-redux';
import {setUserOrders} from '../../store';
import {OrderItem} from './OrderItem';
import {ProductCard} from '../ProductCard';

const mapStateToProps = state => ({
  userOrders: state.user.userOrders,
  user_id: state.user.userData._id
});

export const OrderList = connect(mapStateToProps, {setUserOrders})(props => {
  const {user_id, userOrders, setUserOrders} = props;
  /* eslint-disable */
  useEffect(() => {
    setUserOrders(user_id);
  }, []);

  const renderOrderItems = array => {
      return array.map(order =>
          <OrderItem cart={order.cart} orderDate={order.orderDate} orderStatus={order.orderStatus} key={order._id}/>
          )
  };

    /* eslint-enable */
  return (
    userOrders
      ? renderOrderItems(userOrders)
      : null
  )
});