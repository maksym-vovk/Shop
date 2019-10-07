import React from 'react';
import { Cart } from './index';

describe('Cart component', () => {
  it('Cart component render', () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper).toMatchSnapshot();
  });
});