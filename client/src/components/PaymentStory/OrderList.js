import React, { useEffect } from 'react';

import {connect} from 'react-redux';
import {setUserOrders} from '../../store';
import {EmptyPage} from '../EmptyPage'
import {OrderItem} from './OrderItem';

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
  /* eslint-enable */
  const renderOrderItems = array => {
    return array.map(order =>
      <OrderItem cart={order.cart} orderDate={order.orderDate} orderStatus={order.orderStatus} key={order._id}/>
    )
  };

  return (
    <React.Fragment>
      {
        userOrders
          ? renderOrderItems(userOrders)
          : <EmptyPage text="Order history is empty"/>
      }
    </React.Fragment>
  )
});