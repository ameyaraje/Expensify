import moment from 'moment';

const filters1 = {
    text: '',
    sortBy: 'date',
    setStartDate: undefined,
    setEndDate: undefined
}; 

const filters2 = {
    text: 'bill',
    sortBy: 'date',
    setStartDate: undefined,
    setEndDate: undefined
}; 

const filters3 = {
    text: '',
    sortBy: 'amount',
    setStartDate: moment(0),
    setEndDate: moment(0).add(3, 'days').valueOf()
}; 

export { filters1, filters2, filters3 };
