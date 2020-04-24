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

database.ref().set({
    name: 'Frank Lampard',
    age: 42,
    role: 'Manager',
    location: {
        building: 'Main',
        facility: 'Cobham'
    }
});

database.ref('age').set(43);
database.ref('location/building').set('Main-1');
database.ref('directreports').set([
    'Jody Morris',
    'Ashley Cole'
]);