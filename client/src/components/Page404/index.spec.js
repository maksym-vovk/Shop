import React from 'react';
import { Page404 } from './index';

describe('Page404 component', () => {
  it('Page404 component render', () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper).toMatchSnapshot();
  });
});