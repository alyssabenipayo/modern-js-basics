// Maps and Sets are Special Objects

'use strict';

//  Map is an object that holds a key value pair.

// const fruit = new Map();

// fruit.set(1, 'Banana');
// fruit.set(2, 'Apple');
// fruit.set(3, 'Strawberry');

// document.getElementById('output').innerHTML = fruit.get(2);

// fruit.delete(2);


// fruit.forEach(item => {
//     document.getElementById('output').innerHTML += '<br>' + item;
// });

// The key and the value can be anything.

// fruit.set(4, {
//     type: 'Orange',
//     color: 'orange',
//     flavor: 'orangey'
// });

// document.getElementById('output').innerHTML = fruit.get(4).flavor;

const users = new Map();

users.set({
    name: 'Alyssa',
    email: 'alyssa@example.com'
}, function(user){
    document.getElementById('output').innerHTML += `${user.name} (${user.email}) <br>`;
});

// Console log reveals false if we set like so because
// although an item shows in the users map, it's
// not the same object as if they are two different keys.
// users.set({
//     name: 'Ashley',
//     email: 'ashley@example.com'
// }, function(user){
//     document.getElementById('output').innerHTML += `(${user.email}) ${user.name} <br>`;
// });

// So we create an object.
const userAshley = {
    name: 'Ashley',
    email: 'ashley@example.com'
};

users.set(userAshley, function(user){
    document.getElementById('output').innerHTML += `(${user.email}) ${user.name} <br>`;
});

// The value is the function. The key are what we set in the map.
users.forEach((value, key) => {
    value(key);
});

// A has method where we pass in an idea and 
// it will turn into a boolean (true or false)
// if the item exists in the map.
let userAshleyExists = users.has(userAshley);

// Should return true because the item DOES exist in
// the map that has the following as the key:
console.log('userAshleyExists: ', userAshleyExists);


// Sets only contain value. Not keys.
const fruit = new Set();

// Sets does not allow duplicate values.
// If duplicate exists, it will not show as an error
// in the console log. It will simply ignore it.
fruit.add('Banana');
fruit.add('Apple');
fruit.add('Strawberry');

fruit.forEach(value => {
    document.getElementById('output').innerHTML += '<br>' + value;
});