import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

import moment from 'moment';

test('should set default state for expenses reducer', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should test add expense', () => {
    const newExpense = {
        id: '678',
        description: 'bill 8',
        note: '',
        amount: 100,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    };

    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE', 
        expense: newExpense 
    });

    expect(state).toContain(newExpense);

    // as suggested 
    // expect(state).toEqual([...expenses, newExpense])
});

// valid ID provided
test('should remove expense by id', () => {
    const id = '123';

    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: id
    });

    expect(state).toEqual([ expenses[1], expenses[2], expenses[3] ]);
});

test('should edit expense by id', () => {
    const id = '123';

    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: {
            amount: 84
        }
    });
    
    expect(state[0].amount).toBe(84);
});


// invalid ID provided
test('should not remove expense if id not found', () => {
    const id = '546546';

    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: id
    });

    expect(state).toEqual([ ...expenses ]);
});

test('should not remove expense if id not found', () => {
    const id = '546546';

    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: id,
        updates: {
            note: 'new note'
        }
    });

    expect(state).toEqual([ ...expenses ]);
});