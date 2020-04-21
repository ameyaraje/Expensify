import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
    return (
        <div>
            Expense Component
        </div>
    );
};

const AddExpensePage = () => {
    return (
        <div>
            From the Add Expense Page
        </div>
    );
};

const EditExpensePage = () => {
    return (
        <div>
            From the Edit Expense Page
        </div>
    );
};

const HelpPage = () => {
    return (
        <div>
            From the Help Page
        </div>
    );
};

const NotFoundPage = () => {
    return (
        <div>
            This page does not exist. Please check the route you're on.
        </div>
    );
};

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route path="/add" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));