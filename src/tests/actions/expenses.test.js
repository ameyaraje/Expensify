import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

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

test('should set up add expense action object using default values', () => {
    // const testExpense = {
    //     description: '',
    //     note: '',
    //     amount: 0,
    //     createdAt: 0,
    //     id: expect.anything()
    // };
    
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: expect.any(String),
            note: expect.any(String),
            amount: 0,
            createdAt: 0,
            id: expect.anything()
        }
    });
});