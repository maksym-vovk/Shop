import React from 'react';
import { Logo } from './index';

describe('Logo component', () => {
  it('Logo component render', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});