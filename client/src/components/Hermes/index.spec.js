import React from 'react';
import { Hermes } from './index';

describe('Hermes component', () => {
  it('Hermes component render', () => {
    const wrapper = shallow(<Hermes />);
    expect(wrapper).toMatchSnapshot();
  });
});