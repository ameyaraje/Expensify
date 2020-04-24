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

/*
 * CREATE
*/
database.ref().set({
    name: 'Frank Lampard',
    age: 42,
    role: 'Manager',
    location: {
        building: 'Main',
        facility: 'Cobham'
    }
}).then(() => {
    console.log('Data updated successfully');
    
}).catch((e) => {
    console.log('FAILED: ', e);
    
});

// database.ref('age').set(43);
// database.ref('location/building').set('Main-1');
database.ref('directreports').set([
    'Jody Morris',
    'Ashley Cole'
]).then(() => {
    console.log('Added direct reports');
}).catch((e) => {
    console.log('FAILED', e);
});

/**
 * DELETE
 */

// database.ref('directreports').remove().then(() => {
//     console.log('Removed field');
// }).catch((e) => {
//     console.log('Failed', e);
// });

// Same as using remove
database.ref('directreports').set(null).then(() => {
    console.log('Removed field');
}).catch((e) => {
    console.log('Failed', e);
});

/**
 * UPDATE
 */
database.ref().update({
    age: 45,
    directReports: [
        'Petr Cech'  
    ]
}).then(() => {
    console.log('Updated direct reports');
    
}).catch((e) => {
    console.log('Update to direct reports failed', e);
    
});

database.ref().update({
    age: 45,
    'location/building': 'The Shed'
}).then(() => {
    console.log('Updated building');
    
}).catch((e) => {
    console.log('Update to building failed', e);
    
});
