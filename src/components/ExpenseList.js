import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => {
    // console.log('------>', props.expenses[0]);
    
    return (
        <div>
            <h2>Here are all the expenses</h2>
            {
                props.expenses.length === 0 ? (
                    <h4>No Expenses to Show</h4>
                ) : (
                    props.expenses.map((expense) => {
                        return (<ExpenseItem key={expense.id} item={expense}/>);
                    })
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);