console.log('blah');

/* 
    Object Destructuring
*/

const person = {
    name: 'Frank Lampard',
    age: 42,
    location: {
        city: 'London',
        area: 'Chelsea'
    }
};

const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}`);

const { city, area: borough} = person.location;

if (city && borough) {
    console.log(`He lives in ${city} near ${borough}`);
}

/* 
    Array Destructuring
*/

const address = ['1 Hacker Way', 'Menlo Park', 'California', '94425'];
const [, , state = 'Arizona', zip] = address;

console.log(`${zip} belongs to ${state}`);