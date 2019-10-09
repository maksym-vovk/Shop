import React from 'react';
import { Nike } from './index';

describe('Nike component', () => {
  it('Nike component render', () => {
    const wrapper = shallow(<Nike />);
    expect(wrapper).toMatchSnapshot();
  });
});