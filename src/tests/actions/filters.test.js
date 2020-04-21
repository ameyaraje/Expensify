import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('this should generate set start date action object', () => {
    const action = setStartDate(moment(1000));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(1000)
    });
});

test('this should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('this should generate sortByAmount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('this should generate sortByDate action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('this should generate setTextFilter action object with no value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('this should generate setTextFilter action object', () => {
    const action = setTextFilter('testest');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'testest'
    });
});