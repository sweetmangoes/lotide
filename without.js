
const without = function (source, itemsToRemove) {
  let remainingItems = source.slice(); 
  for (let r = 0; r < itemsToRemove.length; r++) {
  const valueToRemove = itemsToRemove[r];   
  console.log("Value to remove is", valueToRemove) 
  remainingItems = remainingItems.filter( function (item) {
      return item !== valueToRemove;  
   })  
   console.log('Remaining items are', remainingItems)
  }
  return remainingItems;
  
}


// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(['car','house','trees'], ['car'])// => [house','trees']





