const assertEqual = require('../assertEqual');
const eqArrays = require('../assertArrayEqual'); 

assertEqual(eqArrays([1, 2, 3], [1, 2]), true); /// prints false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); /// prints true
assertEqual(eqArrays([1, 2, 3], [1, 2, 'q']), true); // prints false
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), true);// prints false