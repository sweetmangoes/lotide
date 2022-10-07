// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `${actual} !== ${expected}`);
  }
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== (Object.keys(object2).length)) {
    return false;
  }
  for (const key in object1) {
    const isArray = Array.isArray(object1[key]) && Array.isArray(object2[key]);
    if (isArray && !eqArrays(object1[key], object2[key])){
        return false; 
    } else if(!isArray && object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;  
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ef = { a: "3", b: "4" };
const abc = { a: "1", b: "2", c: "3" };

/// Objects with arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

/// Arrays inside objects. 
const eqArrays = (array1, array2) => {
  if( array1.length !== array2.length) {
  return false;
 } 
 for (let i = 0; i < array1.length; i++) {
  if (array1[i] != array2[i]) {
    return false;
  }
 }
 return true; 
}


assertObjectsEqual(eqObjects(ab,ba), true) // pass
assertObjectsEqual(eqObjects(ab,ef), true)// failed
// console.log(assertObjectsEqual(eqObjects(cd,dc), true)) // pass
// console.log(assertObjectsEqual(eqObjects(cd,cd2), true))// failed