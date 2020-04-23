import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesLen={1} expenseTotal={34} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with no expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesLen={0} expenseTotal={0} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesLen={12} expenseTotal={324} />);

    expect(wrapper).toMatchSnapshot();
});