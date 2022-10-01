// new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
// pseudo code:
// Problem is to return the index of each character excluding space. 
// We will need:
// (1) a loop of each index character inside the sentence string.
// (2) if condition statement exclude (i.e false) space character " "
// (3) return the index of each position 


const letterPositions = sentence => {
  const results = {};
  let i = 0;
  for (const position of sentence) { //(1) loop to find the values.
    if (position !== ' ') { //(2) condition to skip spaces.
     if (results[position]) {
      results[position].push(i);
      console.log(`Returning the index of the character ${results}`)
     } else {
      results[position] = [i]
     }
    }
    i++
  }
  
  return results;
}

//test case 
letterPositions('hello'); // {h:[0] , e:[1], l:[2,3], o:[4] }
// letterPositions('I like fast cars') // c

console.log(letterPositions('hello'));
console.log(letterPositions("I like fast cars!"));