import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();

// store.dispatch(addExpense({
//     description: 'Phone Bill',
//     note: 'for June 2019',
//     amount: 25500,
//     createdAt: moment(1000).valueOf()
// }));

// store.dispatch(addExpense({
//     description: 'internet Bill',
//     note: 'for July 2019',
//     amount: 40000,
//     createdAt: -43000
// }));

const layout = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(layout, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});