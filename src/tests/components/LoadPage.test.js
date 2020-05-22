import React from 'react';
import { shallow } from 'enzyme';

import LoadPage from '../../components/LoadPage';

test('test should render LoadPage', () => {
    const wrapper = shallow(<LoadPage />);
    
    expect(wrapper).toMatchSnapshot();
});