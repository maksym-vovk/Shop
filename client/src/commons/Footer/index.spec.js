import React from 'react';
import { Footer } from './index';

describe('Footer component', () => {
  it('Footer component render', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});