import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    // console.log('-----> ', props);
    
    return (
        <div>
            {props.expensesLen === 1 ? (
                <p>Viewing 1 expense totalling {numeral(props.expenseTotal).format('$0,0.00')}</p>
            ) : (
                <p>Viewing {props.expensesLen} expenses totalling {numeral(props.expenseTotal).format('$0,0.00')}</p>
            )}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expenseTotal = getExpensesTotal(visibleExpenses);
    return {
        expensesLen: visibleExpenses.length,
        expenseTotal: expenseTotal
    };
};

export default connect(mapStateToProps)(ExpenseSummary);