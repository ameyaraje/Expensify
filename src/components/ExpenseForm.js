import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
            };
    
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(() => {
            return {
                description: description
            };
        });
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        
        this.setState(() => {
            return {
                note: note
            };
        });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount: amount
                };
            });
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => {
                return {
                    createdAt: createdAt
                };
            });
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            };
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: 'Please enter a valid Description and Amount'
                };
            });
        } else {
            this.setState(() => {
                return {
                    error: ''
                };
            });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => {return false}}
                    />
                    <textarea 
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>
                        Create Expense
                    </button>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        );
    };
}