const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4]
const sports = ["Basketball", "Soccer", "Tennis"]

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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


const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num * 2);
const results3 = map(sports, sport => sport + " " +23)
// console.log(results1)
// console.log(results3)


assertEqual(eqArrays(results1, ['g', 'c', 't', 'm', 't']), true);
assertEqual(eqArrays(results2, [2, 4, 6, 8 ]), true);
assertEqual(eqArrays(results3, ['Basketball 23', 'Soccer 23', 'Tennis 23' ]), true);