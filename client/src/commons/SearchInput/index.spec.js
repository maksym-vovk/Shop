import React from 'react';
import SearchInputButton from './SearchInputButton';

describe('SearchInputButton component', () => {
  it('SearchInputButton component render', () => {
    const wrapper = shallow(<SearchInputButton />);
    expect(wrapper).toMatchSnapshot();
  });
});