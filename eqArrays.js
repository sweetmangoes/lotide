const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `${actual} !== ${expected}`);
  }
}
//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays= function (array1, array2) {
  if( array1.length !== array2.length) {
  return false;
 } else {
 for (let i = 0; i < array1.length; i++) {
  //console.log( "array1", array1[i], "array2",array2[i]);
  if (array1[i] != array2[i]) {
    return false;
  }
  }
  return true
 }

}

// test case
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); /// prints false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); /// prints ture
assertEqual(eqArrays([1, 2, 3], [1, 2, 'q']), true); // prints false
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), true);// prints false