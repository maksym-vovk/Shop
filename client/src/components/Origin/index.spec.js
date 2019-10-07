import React from 'react';
import { Origin } from './index';

describe('Origin component', () => {
  it('Origin component render', () => {
    const wrapper = shallow(<Origin />);
    expect(wrapper).toMatchSnapshot();
  });
});