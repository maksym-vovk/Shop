import React, { useState, useEffect } from 'react';

import {connect} from 'react-redux';
import {setUserOrders} from '../../store';
import {EmptyPage} from '../EmptyPage'
import {OrderItem} from './OrderItem';
import {Preloader} from '../Preloader';

const mapStateToProps = state => ({
  userOrders: state.user.userOrders,
  user_id: state.user.user_id
});

export const OrderList = connect(mapStateToProps, {setUserOrders})(props => {
  const {user_id, userOrders, setUserOrders} = props;
  const [loading, setLoading] = useState(true);
  /* eslint-disable */
  useEffect(() => {
    setUserOrders(user_id);
    setTimeout(() => {setLoading(false)}, 1000)
  }, []);
  /* eslint-enable */
  const renderOrderItems = array => {
    return array.map(order =>
      <OrderItem cart={order.cart} orderDate={order.orderDate} orderStatus={order.orderStatus} key={order._id}/>
    )
  };

  const Orders = () => {
    return (
      <React.Fragment>
        {
          userOrders
            ? renderOrderItems(userOrders)
            : <EmptyPage text="Order history is empty"/>
        }
      </React.Fragment>
    )
  };

  return (
    loading ? <Preloader/> : <Orders />
  )
});