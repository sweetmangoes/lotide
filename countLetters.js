const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, `${actual} !== ${expected}`);
  }
}

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.


const countLetters = (sentence) => {
  const count = {};
  for (const letter of sentence) {
    // console.log(`Returning each letter from sentence, ${letter}`)
    if (letter !== ' ') {
    if (count[letter]) {
      count[letter] = 1 + count[letter];
      // console.log(`Returning the count of each letter ${count[letter]}`)
    } else {
      count[letter] = 1; 
    }
   }
    }
  return count;
}



// test case -> countLetters('LHL') should return results indicating that L appears twice, and H once.
// countLetters("LHL")

// console.log(countLetters("LHL")) // prints 
console.log(countLetters("I love fast cars")) // prints 