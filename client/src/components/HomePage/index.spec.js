import React from 'react';
import { HomePage } from './index';

describe('HomePage component', () => {
  it('HomePage component render', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});