const assert = require('chai').assert;
const tail = require('../tail');

// assertEqual(tail([1,2,3,4]).length, 2);

describe("#tail", () => {
  it("returns [ 2, 3, 4 ] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1,2,3,4]), [ 2, 3, 4 ]);
  });
});

