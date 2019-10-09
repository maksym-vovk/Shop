import React from 'react';

// styles
import './index.scss';

export const DeliveryMethod = (props) => {
    const {deliveryPrice} = props;

    const changeDeliveryMethod = (e) => {
        const deliveryOption = e.target.closest('.delivery__option');
        const activeOption = document.querySelector('.delivery__option--active');

        if (activeOption){
            activeOption.classList.remove('delivery__option--active')}

        if (deliveryOption) {
            return deliveryOption.classList.add('delivery__option--active')
        }
    };

  return (
    <div className="delivery-block" onClick={(e)=>changeDeliveryMethod(e)}>
      <div className="delivery">
        <p className="delivery__subtitle">Select your delivery method:</p>
        <div className="delivery__option delivery__option--active" onClick={()=>deliveryPrice(0)}>
          <span className="delivery__method">Standard Delivery</span>
          <span className="delivery__price">FREE</span>
        </div>
        <div className="delivery__option" onClick={()=>deliveryPrice(8)}>
          <span className="delivery__method">Express Delivery</span>
          <div className="delivery__price">
            <span>$8.00</span>
            <span className="delivery__price-text">Flat rate</span>
          </div>
        </div>
        <div className="delivery__option" onClick={()=>deliveryPrice(9)}>
          <span className="delivery__method">Courier Delivery from an Apple Store</span>
          <div className="delivery__price">
            <span>$9.00</span>
            <span className="delivery__price-text">Flat rate</span>
          </div>
        </div>
      </div>
      <div className="reference">
        <p className="reference__subtitle">Some things to keep in mind:</p>
        <ul className="reference__list">
          <li className="reference__list-item">The carrier may require a signature upon delivery.</li>
          <li className="reference__list-item">Courier Delivery is only available in select areas and
                    requires someone to be present when your
                    order arrives. You may also be contacted prior to delivery.
          </li>
        </ul>
      </div>
    </div>
  )
};