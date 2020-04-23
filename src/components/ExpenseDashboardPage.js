import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => {
    return (
        <div>
            <h1>Expense Component</h1>
            <ExpenseSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
};

export default ExpenseDashboardPage;