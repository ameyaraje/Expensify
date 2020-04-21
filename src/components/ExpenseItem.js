import React from 'react';
import { Link } from 'react-router-dom';

import { removeExpense } from '../actions/expenses';

const ExpenseItem = (props) => {
    // console.log(props);
    return (
        <div>
            <p>
                Name: 
                <Link to={`/edit/${props.item.id}`}>
                    {props.item.description}
                </Link>
            </p>
            <p>
                Amount: {props.item.amount}
            </p>
            <p>
                CreatedAt: {props.item.createdAt}
            </p>
        </div>
    );
};

export default ExpenseItem;