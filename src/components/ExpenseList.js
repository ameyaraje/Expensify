import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => {
    // console.log('------>', props.expenses[0]);
    
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {
                    props.expenses.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Expenses to Show</span>
                        </div>
                    ) : (
                        props.expenses.map((expense) => {
                            return (<ExpenseItem key={expense.id} item={expense}/>);
                        })
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);