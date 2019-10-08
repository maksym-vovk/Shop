import React from 'react';
import { UserIcon } from './index';

describe('UserIcon component', () => {
  it('UserIcon component render', () => {
    const wrapper = shallow(<UserIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});