import React from 'react';
import { Edition } from './index';

describe('Edition component', () => {
  it('Edition component render', () => {
    const wrapper = shallow(<Edition />);
    expect(wrapper).toMatchSnapshot();
  });
});