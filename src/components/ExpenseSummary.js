import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';

export const ExpenseSummary = (props) => {
    // console.log('-----> ', props);
    
    return (
        <div className="page-header">
            <div className="content-container">
                {props.expensesLen === 1 ? (
                    <h2 className="page-header__title">Viewing 1 expense totalling {numeral(props.expenseTotal).format('$0,0.00')}</h2>
                ) : (
                    <h2 className="page-header__title">Viewing <span>{props.expensesLen}</span> expenses totalling <span>{numeral(props.expenseTotal).format('$0,0.00')}</span></h2>
                )}
                <div className="page-header__actions">
                    <Link className="button" to="/add">Add Expense</Link>
                </div>
            </div>
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