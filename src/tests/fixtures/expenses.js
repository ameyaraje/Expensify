import moment from 'moment';

export default [{
    id: '123',
    description: 'bill 1',
    note: 'no note',
    amount: 10,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '1234',
    description: 'bill 2',
    note: '',
    amount: 20,
    createdAt: 0
},
{
    id: '987',
    description: 'bill 3',
    note: 'blah blah',
    amount: 30,
    createdAt: moment(0).add(2, 'days').valueOf()
},
{
    id: '367',
    description: 'kuchbhi',
    note: 'note note note',
    amount: 40,
    createdAt: moment(0).add(8, 'days').valueOf()
}];