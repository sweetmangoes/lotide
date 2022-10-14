const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = (array, callback) => {
 const results = [];
  for (const i of array) {
    if (callback(i)) {
      return results;
    }
    results.push(i);
  }
  return results; 
}

const results1 = takeUntil( data1, x => x < 0); 
console.log(results1)

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `${actual} !== ${expected}`);
  }
}

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

assertEqual(eqArrays(results1,[ 1, 2, 5, 7, 2 ]), true);
