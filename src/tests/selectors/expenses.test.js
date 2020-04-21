import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

import moment from 'moment';

test('should filter by text value', () => {
    const filters = {
        text: 'bi',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters); 

    expect(result).toEqual([ expenses[2], expenses[1], expenses[0] ]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[3], expenses[2], expenses[1] ]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[1], expenses[0] ]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[3], expenses[2], expenses[1], expenses[0] ]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[3], expenses[2], expenses[1], expenses[0] ]);
});