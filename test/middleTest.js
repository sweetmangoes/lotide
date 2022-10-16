const middle = require('../middle'); 
const assert = require('chai').assert;

// assertEqual((eqArrays(middle([1, 2, 3]), [2])),true);
// // console.log(middle([1,2])) // => []
// // console.log(middle([1,2,3])) // => [2]
// // console.log(middle([1,2,3,4,5,6,7,8])) // => [2,3]

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});
