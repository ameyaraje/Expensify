import { createStore, combineReducers } from 'redux';
import { v1 as uuidv1 } from 'uuid';

/* 
    Actions to be completed
    add expense
    remove expense
    edit expense
    set text filter
    sort by date
    sort by amount
    set start date
    set end date
*/

// define reducer default states
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


// action generators
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv1(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    };
};

const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    };
};

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates  
    };
};

const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    };
};

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    };
};

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    };
};

const setStartDate = (dateVal = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate: dateVal
    };
};

const setEndDate = (dateVal = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate: dateVal
    };
};

// create reducers
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id;
            });

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })

        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount' 
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date' 
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        default:
            return state;
    }
};

// get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// create store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({
    description: 'Test',
    note: 'testest',
    amount: 1400,
    createdAt: 10000
}));

const exp2 = store.dispatch(addExpense({
    description: 'Test2',
    note: 'testesttestestest',
    amount: 500
}));

// store.dispatch(removeExpense({
//     id: exp1.expense.id
// }));

// store.dispatch(editExpense(exp2.expense.id, {
//     note: 'new edited value'
// }));

// store.dispatch(setTextFilter('tes'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(11111));
// store.dispatch(setEndDate());



const demoData = {
    expenses: [{
        id: 'dfjnfg',
        description: 'Kings Pub',
        note: 'drink with friends',
        amount: 1340,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};