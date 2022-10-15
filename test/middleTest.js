const middle = require('../middle'); 
const eqArrays = require('../assertArrayEqual'); 
const assertEqual = require('../assertEqual');

assertEqual((eqArrays(middle([1, 2, 3]), [2])),true);
// console.log(middle([1,2])) // => []
// console.log(middle([1,2,3])) // => [2]
// console.log(middle([1,2,3,4,5,6,7,8])) // => [2,3]
