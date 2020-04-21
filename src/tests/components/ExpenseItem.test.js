import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import ExpenseItem from '../../components/ExpenseItem';

test('should render individual expense object', () => {
    const wrapper = shallow(<ExpenseItem item={expenses[0]}/>);

    expect(wrapper).toMatchSnapshot();
});