const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays'); 

assertEqual(eqArrays([1, 2, 3], [1, 2]), true); /// prints false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); /// prints ture
assertEqual(eqArrays([1, 2, 3], [1, 2, 'q']), true); // prints false
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), true);// prints false