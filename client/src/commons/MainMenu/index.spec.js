import React from 'react';
import { MainMenu } from './index';

describe('MainMenu component', () => {
  it('MainMenu component render', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});