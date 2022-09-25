const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `${actual} !== ${expected}`);
  }
};

const tail = function(tailArray) {
  return tailArray.slice(1);
};

assertEqual(tail([1,2,3,4]).length, 2);

