import { v1 as uuidv1 } from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense: expense
    };
};

export const startAddExpense = ( expenseData = {} ) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    };
};

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates  
    };
};