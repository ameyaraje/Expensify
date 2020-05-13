import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../../components/LoginPage';

test('should render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);

    expect(wrapper).toMatchSnapshot();
});