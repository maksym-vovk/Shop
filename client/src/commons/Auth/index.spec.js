import React from 'react';
import { Auth } from './index';

describe('Auth component', () => {
  it('Auth component render', () => {
    const wrapper = shallow(<Auth />);
    expect(wrapper).toMatchSnapshot();
  });
});