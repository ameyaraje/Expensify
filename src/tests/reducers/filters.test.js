import filtersReducer from '../../reducers/filters';

import moment from 'moment';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

// testing with default state values

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})

    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'})

    expect(state.sortBy).toBe('date');
});

test('should set text filter to nothing', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER'})

    expect(state.text).toBe(undefined);
});

test('should set endDate to nothing', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE'})

    expect(state.endDate).toBe(undefined);
});

test('should set startDate to nothing', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE'})

    expect(state.startDate).toBe(undefined);
});

// testing with some state defined

const currentState = {
    text: 'bill',
    sortBy: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should set sortBy to amount', () => {
    const state = filtersReducer(currentState, {type: 'SORT_BY_AMOUNT'})

    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})

    expect(state.sortBy).toBe('date');
});

test('should set text filter to the given value', () => {
    const state = filtersReducer(currentState, {type: 'SET_TEXT_FILTER', text: 'coffee'})

    expect(state.text).toBe('coffee');
});

test('should set endDate to given value', () => {
    const state = filtersReducer(currentState, {type: 'SET_END_DATE', endDate: moment(0)})

    expect(state.endDate).toEqual(moment(0));
});

test('should set startDate to given value', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(1000)})

    expect(state.startDate).toEqual(moment(1000));
});



