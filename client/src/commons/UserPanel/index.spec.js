import React from 'react';
import { UserPanelModal } from './UserPanelModal';

describe('UserPanelModal component', () => {
  it('UserPanelModal component render', () => {
    const wrapper = shallow(<UserPanelModal />);
    expect(wrapper).toMatchSnapshot();
  });
});