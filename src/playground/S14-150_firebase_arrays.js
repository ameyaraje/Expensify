import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAC1d3PIzos92szeHbQW-oXNB3wqZa3yuw",
    authDomain: "expensify-3daf5.firebaseapp.com",
    databaseURL: "https://expensify-3daf5.firebaseio.com",
    projectId: "expensify-3daf5",
    storageBucket: "expensify-3daf5.appspot.com",
    messagingSenderId: "750618223459",
    appId: "1:750618223459:web:3a79af376759970547a956"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

/**
 * Add some test data to begin with
 */

// database.ref('expenses').push({
//     description: 'abc',
//     note: 'note',
//     amount: 123,
//     createdAt: 1000
// });

// database.ref('expenses').push({
//     description: 'xyz',
//     note: 'notenote',
//     amount: 456,
//     createdAt: 2000
// });

// database.ref('expenses').push({
//     description: 'mno',
//     note: 'notenotenote',
//     amount: 789,
//     createdAt: 3000
// });

/**
 * View a change made on the DB once
 */

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((expense) => {
//             expenses.push({
//                 id: expense.key,
//                 ...expense.val()
//             });
//         });

//         console.log(expenses);
//     });

/**
 * Subscribe to changes on the DB
 */

// database.ref().on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((expense) => {
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         });
//     });

//     console.log(expenses);
// }, (e) => {
//     console.log('Failed to fetch data', e);
// });

/**
 * Subscribe to specific events
 */

// removed an expense
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// edited an expense
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// added a new expense
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});