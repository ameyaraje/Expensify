import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpenseSpy, removeExpenseSpy, wrapper, historySpy;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    removeExpenseSpy = jest.fn();
    wrapper = shallow(<EditExpensePage 
        history={historySpy} 
        editExpense={editExpenseSpy} 
        removeExpense={removeExpenseSpy} 
        expense={expenses[0]}
    />);
});

test('should render EditExpense', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should edit an existing expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should remove an existing expense', () => {
    wrapper.find('button').simulate('click');

    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ 
        id: expenses[0].id 
    });
});