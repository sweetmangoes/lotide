//Create a function flatten which will take in an flat containing elements including nested flats of elements, and return a "flattened" version of the flat.

const flatten = function (flat) {
  let nestedArray = [];
  let outerArray = [];
  // let newArray = [];
  for (let i = 0; i < flat.length; i++) { 
    if (Array.isArray(flat[i])) {
      for (let n = 0; n < flat[i].length; n++) {
        nestedArray.push(flat[i][n]);
        // console.log(`New  # from nest array ${nestedArray}`)
      } 
    } else {
      outerArray.push(flat[i])
      // console.log(`Outer Array # ${outerArray}`)
    }  
  }
  return outerArray.concat(nestedArray).sort();
  // console.log(`Our new array ${newArray.sort()}`)
  // return newArray;
}
 
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
