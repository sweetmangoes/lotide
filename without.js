
const without = function (source, itemsToRemove) {
  let remainingItems = source.slice(); 
  for (let r = 0; r < itemsToRemove.length; r++) {
  const valueToRemove = itemsToRemove[r];   
  console.log("Value to remove is", valueToRemove) 
  remainingItems = remainingItems.filter( function (item) {
      return item !== valueToRemove;  
   })  
   console.log('Remaining items are', remainingItems)

    // for (let s = 0; i < remainingItems.length; s++) { 
       
    // }
   
  }
  return remainingItems;
    // console.log("source" ,source[i], itemsToRemove[i]);
    // if (source[i] !== itemsToRemove[i]) {
    //   console.log(source[i]);
    //   return source[i];
    // }
  
}


// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(['car','house','trees'], ['car'])// => [house','trees']




// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.assert(actual === expected, `${actual} !== ${expected}`);
//   }
// }


// const eqArrays= function (array1, array2) {
//   if( array1.length !== array2.length) {
//   return false;
//  } else {
//  for (let i = 0; i < array1.length; i++) {
//   //console.log( "array1", array1[i], "array2",array2[i]);
//   if (array1[i] != array2[i]) {
//     return false;
//   }
//   }
//   return true
//  }
// }

//Test Case 
// assertEqual(without([1, 2, 3], [1])) // => [2, 3]
// assertEqual(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

