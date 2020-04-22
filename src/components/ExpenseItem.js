import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

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
                Amount: {numeral(props.item.amount).format('$0,0.00')}
            </p>
            <p>
                CreatedAt: {moment(props.item.createdAt).format('MMMM-DD-YYYY')}
            </p>
        </div>
    );
};

export default ExpenseItem;