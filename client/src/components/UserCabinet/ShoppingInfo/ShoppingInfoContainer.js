import React from 'react';
import {UserShoppingInfo} from './UserShoppingInfo';
import './shoppingContainer.scss'

export const ShoppingInfoContainer = () => {
  const ordersDesc = 'See your order history here';
  const favoriteDesc = 'When you see the heart icon while shopping, tap it to add items to your list';
  return (
    <div className="background-shopping-info">
      <div className="container">
        <div className="shopping-info-flex">
          <UserShoppingInfo title="Your Orders" description={ordersDesc} link='/order_history' linkName='See your order history >'/>
          <UserShoppingInfo title="Your Favorites" description={favoriteDesc} link='/favorites' linkName='See your favorites >'/>
        </div>
      </div>
    </div>
  )
};