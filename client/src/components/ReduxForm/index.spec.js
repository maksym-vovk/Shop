import React from 'react';
import { ReduxForm } from './index';

describe('ReduxForm component', () => {
  it('ReduxForm component render', () => {
    const wrapper = shallow(<ReduxForm />);
    expect(wrapper).toMatchSnapshot();
  });
});