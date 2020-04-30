import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' });

    expect(action).toEqual({
        id: 'abc123',
        type: 'REMOVE_EXPENSE'     
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense('abc123', { note: 'some note' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'some note'
        }
    });
});

test('should set up add expense action object', () => {
    const testExpense = {
        description: 'a description',
        note: 'a note',
        amount: 1234,
        createdAt: 3948,
        id: expect.anything()
    };
    
    const action = addExpense(testExpense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...testExpense
        }
    });
});

// test('should set up add expense action object using default values', () => {
    
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
            // description: expect.any(String),
            // note: expect.any(String),
            // amount: 0,
            // createdAt: 0,
            // id: expect.anything()
//         }
//     });
// });

test('should set up add expense action object using provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test('should add expense to DB and store using defaults', (done) => {
    const mockStore = createMockStore({});
    const expenseData = {
        description: 'test data desc', 
        note: 'test data note', 
        amount: 11, 
        createdAt: 230
    };

    mockStore.dispatch(startAddExpense()).then(() => {
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: expect.any(String),
                note: expect.any(String),
                amount: 0,
                createdAt: 0,
            }
        });
        done();
    });
});

test('should add expense to DB and store', (done) => {
    const mockStore = createMockStore({});
    const expenseData = {
        description: 'test data desc', 
        note: 'test data note', 
        amount: 11, 
        createdAt: 230
    };

    mockStore.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        done();
    });
});