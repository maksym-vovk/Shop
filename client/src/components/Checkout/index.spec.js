import React from 'react';
import { CheckoutPurchased } from './CheckoutPurchased';
import { CheckoutSummary } from './CheckoutSummary';
import { CheckoutTitle } from './CheckoutTitle';
import { FailureOrder } from './FailureOrder';

describe('Checkout components', () => {
  it('CheckoutPurchased component render', () => {
    const wrapper = shallow(<CheckoutPurchased />);
    expect(wrapper).toMatchSnapshot();
  });
  it('CheckoutSummary component render', () => {
    const wrapper = shallow(<CheckoutSummary />);
    expect(wrapper).toMatchSnapshot();
  });
  it('CheckoutTitle component render', () => {
    const wrapper = shallow(<CheckoutTitle />);
    expect(wrapper).toMatchSnapshot();
  });
  it('FailureOrder component render', () => {
    const wrapper = shallow(<FailureOrder />);
    expect(wrapper).toMatchSnapshot();
  });
});