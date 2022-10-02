// Pseudo code 
// Problem: Implement the function findKeyByValue which takes in an object and a value. 
// It should:
// (1) scan the object -> loop through the object. 
// (2) return the first key which contains the given value. 
// (3) If no key with that given value is found, then it should return undefined.

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (object, value) => {
  // return index = [];
  for (const key in object) {
    // console.log(key, object[key]); // prints for ex. drama The wire
    if (object[key] === value) {
      // console.log(`values match`) // prints the the wire
      // console.log(key)
      return key
    }
  }
  // return index;
}


// findKeyByValue(bestTVShowsByGenre, "The Wire")
// findKeyByValue(bestTVShowsByGenre, "That 70s Show")

// console.log(Object.keys(bestTVShowsByGenre))

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `${actual} !== ${expected}`);
  } 
}

//test cases
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));