//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

// => For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]) // => []
// middle([1, 2]) // => []

//=>For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]  

//=>For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const middle = function(array) {
  if(array.length <= 2 ) {
    return []; 
  } 
  if(array.length % 2 === 0) {
    const middle1 = array.length / 2 - 1;
    const middle2 = array.length / 2;
    return [array[middle1], array[middle2]];
  }
  const index = Math.floor(array.length/2)
  return [array[index]] ; 
}

module.exports = middle; 
