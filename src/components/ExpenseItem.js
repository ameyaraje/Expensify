import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

import { removeExpense } from '../actions/expenses';

const ExpenseItem = (props) => {
    return (
        <Link className="list-item" to={`/edit/${props.item.id}`}>
            <div>
                <h3 className="list-item__title">{props.item.description}</h3>
                <span className="list-item__subtitle">{moment(props.item.createdAt).format('MMMM-DD-YYYY')}</span>
            </div>
            <h3 className="list-item__data">{numeral(props.item.amount).format('$0,0.00')}</h3>
        </Link>
    );
};

export default ExpenseItem;