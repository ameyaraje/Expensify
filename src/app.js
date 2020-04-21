import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { sortByAmount, sortByDate, setEndDate, setStartDate, setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();

store.dispatch(addExpense({
    description: 'Phone Bill',
    note: 'for June 2019',
    amount: 25500,
    createdAt: 10000
}));

store.dispatch(addExpense({
    description: 'internet Bill',
    note: 'for July 2019',
    amount: 40000,
    createdAt: -43000
}));

store.dispatch(addExpense({
    description: 'Nandos',
    note: 'dinner with friends',
    amount: 1400,
    createdAt: 65000
}));

store.dispatch(addExpense({
    description: 'rent',
    note: 'for july 2019',
    amount: 109100,
    createdAt: 600
}));

console.log(store.getState());

// store.dispatch(setTextFilter('nan'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const layout = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(layout, document.getElementById('app'));