import React from 'react';
import { Filter } from './index';

describe('Filter component', () => {
  it('Filter component render', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper).toMatchSnapshot();
  });
});