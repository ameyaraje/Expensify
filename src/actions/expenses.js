import { v1 as uuidv1 } from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense: expense
    };
};

export const startAddExpense = ( expenseData = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState)  => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove()
        .then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates  
    };
};

export const startEditExpense = (id, updates) => {
    return (dispatch, getState)  => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates)
        .then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses: expenses
    };
};

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
        .once('value')
        .then((snapshot) => {
            const expenses = [];

            snapshot.forEach((obj) => {
                expenses.push({
                    id: obj.key,
                    ...obj.val()
                }); 
            });

            dispatch(setExpenses(expenses));
        });
    };
};