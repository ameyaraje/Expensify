import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    };
};

const resetCount = () => {
    return {
        type: 'RESET'
    };
};

const setCounter = ({ count }) => {
    return {
        type: 'SET',
        count: count
    };
};

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            } 
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

// normal way to get state
console.log(store.getState());

// will perform this action everytime the value changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 12 }));

store.dispatch(decrementCount({ decrementBy: 3}));

store.dispatch(resetCount());

store.dispatch(setCounter({ count: -1 }));

store.dispatch(decrementCount());

