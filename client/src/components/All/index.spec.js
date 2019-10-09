import React from 'react';
import { All } from './index';

describe('All component', () => {
  it('All component render', () => {
    const wrapper = shallow(<All />);
    expect(wrapper).toMatchSnapshot();
  });
});