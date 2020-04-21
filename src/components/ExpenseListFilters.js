import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused: calendarFocused
            };
        });
    };

    onFilterTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortByChange = (e) => {
        var filter = e.target.value;
        if (filter === 'amount') {
            console.log('sorting by amount');
            this.props.sortByAmount();
        }
        if (filter === 'date') {
            console.log('sorting by date');
            this.props.sortByDate();
        }
    };

    render() {
        return (
            <div>
                <p>Enter word to filter expense by here:</p>
                <input type="text" value={this.props.filters.text} onChange={this.onFilterTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => (false)}
                    showClearDates={true}
                />
            </div>
        ); 
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => {
            return dispatch(setTextFilter(text));
        },
        sortByAmount: () => {
            return dispatch(sortByAmount());
        }, 
        sortByDate: () => {
            return dispatch(sortByDate());
        }, 
        setEndDate: (date) => {
            return dispatch(setEndDate(date))
        }, 
        setStartDate: (date) => {
            return dispatch(setStartDate(date))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);