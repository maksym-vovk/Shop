import React from 'react';
import { CartButton } from './CartButton';
import { CartItem } from './CartItem';
import { EmptyCart } from './EmptyCart';

describe('Cart components', () => {
  it('CartButton component render', () => {
    const wrapper = shallow(<CartButton />);
    expect(wrapper).toMatchSnapshot();
  });
  it('CartItem component render', () => {
    const wrapper = shallow(<CartItem />);
    expect(wrapper).toMatchSnapshot();
  });
  it('EmptyCart component render', () => {
    const wrapper = shallow(<EmptyCart />);
    expect(wrapper).toMatchSnapshot();
  });
});