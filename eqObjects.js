// Pseudocode:
/// Problems -> Returns true if both objects have identical keys with identical values. Otherwise you get back a fat false!

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== (Object.keys(object2).length)) {
    return false;
  }
  for (const key in object1) {
    // console.log(`returning key and value of Object 1: ${key} and ${object1[key]} \n Returning key and value of Object 2: ${key} and ${object2[key]} `);
    // console.log("Array.isArray(object1[key]) ",Array.isArray(object1[key])); 
    // console.log(`Object 1 key: ${object1[key]}`); 
    const isArray = Array.isArray(object1[key]) && Array.isArray(object2[key]);
    if (isArray && !eqArrays(object1[key], object2[key])){
        return false; 
    } else if(!isArray && object1[key] !== object2[key]) {
      // console.log(`Object 1: key ${key} and ${object1[key]} = \n Object 2: Key ${key} and ${object2[key]}`); 
      return false;
    }
  }
  return true;  
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ef = { a: "3", b: "4" };
const abc = { a: "1", b: "2", c: "3" };

// console.log(Object.keys(ab))
// console.log(Object.keys(ba))
// console.log(Object.keys(ef))
// console.log(Object.keys(abc))

// const trial = (parameter1, parameter2) => {
//   if (Object.keys(parameter1).length !== (Object.keys(parameter2).length)) {
//     return false;
//   }
//   return true;
// }

// console.log(trial(ab,ba)); // true
// console.log(trial(ab,abc)); // false 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `${actual} !== ${expected}`);
  } 
}

/// Arrays inside objects. 
const eqArrays = (array1, array2) => {
  if( array1.length !== array2.length) {
  return false;
 } 
 for (let i = 0; i < array1.length; i++) {
  //console.log( "array1", array1[i], "array2",array2[i]);
  if (array1[i] != array2[i]) {
    return false;
  }
 }
 return true; 
}

/// Objects with arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// console.log(Array.isArray(Object.keys(cd))); // true 
// console.log(Array.isArray(Object.keys(dc))); // true
// console.log(Array.isArray(Object.keys(cd2))); // true 

// console.log(Object.keys(cd).length); // 2
// console.log(Object.keys(dc).length); // 2
// console.log(Object.keys(cd2).length); // 2

// console.log(eqArrays(cd,dc)); // => true 
// console.log(eqArrays(cd, cd2));  // => false

// console.log(eqObjects(ab, ba)); // => true
// console.log(eqObjects(ab, ef)); // => false
// console.log(eqObjects(ab, abc)); // => false

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false
console.log(eqObjects(dc, cd2)); // => false

// console.log(assertEqual(eqObjects(ab,ba), true)) // pass
// console.log(assertEqual(eqObjects(ab,ef), true))// failed
// console.log(assertEqual(eqObjects(cd,dc), true)) // pass
// console.log(assertEqual(eqObjects(cd,cd2), true))// failed

