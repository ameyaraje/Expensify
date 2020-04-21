import React from 'react';
import { shallow } from 'enzyme';

import { filters1, filters2, filters3 } from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import moment from 'moment';

let setStartDateSpy, setEndDateSpy, setTextFilterSpy, sortByAmountSpy, sortByDateSpy, wrapper;


beforeEach(() => {
    setStartDateSpy = jest.fn(); 
    setEndDateSpy = jest.fn();
    setTextFilterSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    sortByDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters1} 
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
        setTextFilter={setTextFilterSpy}
        sortByAmount={sortByAmountSpy}
        sortByDate={sortByDateSpy}
    />);
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with new filters', () => {
    wrapper.setProps({filters: filters2});

    expect(wrapper).toMatchSnapshot();
});

// test('should sort by date', () => {
//     wrapper.find('option').at(1);
// });

test('should handle filter text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {
            value: value
        }
    });

    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const sortBy = 'date'
    wrapper.find('select').simulate('change', {
        target: {
            value: sortBy
        }
    });

    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const sortBy = 'amount'
    wrapper.find('select').simulate('change', {
        target: {
            value: sortBy
        }
    });

    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate =  moment(0).add(3, 'days');
    const endDate = moment(0).add(8, 'days');;
    
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });

    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const focus = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus);

    expect(wrapper.state('calendarFocused')).toBe(focus);
});