import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => { 
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        var id = this.props.expense.id;
        // console.log(id);
        this.props.startRemoveExpense({ id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
            {/* 
                Editing expense with ID: {this.props.match.params.id}
            */}
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button 
                    onClick={this.onRemove} 
                >
                    Remove Expense
                </button>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => {
            return dispatch(startEditExpense(id, expense));
        },
        startRemoveExpense: (data) => {
            return dispatch(startRemoveExpense(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);