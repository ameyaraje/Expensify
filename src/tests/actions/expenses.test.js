import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import expensesReducer from '../../reducers/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};

    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    }); 

    database.ref('expenses').set(expensesData).then(() => done());
});

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: 'abc123' });

    expect(action).toEqual({
        id: 'abc123',
        type: 'REMOVE_EXPENSE'     
    });
});

test('should remove expense from firebase', (done)=> {
    const mockStore = createMockStore({});
    const id = expenses[2].id;

    mockStore.dispatch(startRemoveExpense({ id }))
    .then(() => {
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should set up set expenses action ', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    });
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[0]]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0]]);

});

// test('should fetch the expenses from firebase', (done) => {
//     const mockStore = createMockStore({});
//     mockStore.dispatch(startSetExpenses())
//     .then(() => {
//         const actions = mockStore.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_EXPENSES',
//             expenses: expenses
//         });

//         done();
//     });
// });