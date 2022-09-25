const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🤑 Assertion Passed: ', actual,' === ', expected);
  } else {
    console.assert(actual === expected, actual,' !== ', expected);
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual('Lighthouse Labs', 5);
assertEqual(1,'1');
assertEqual('Lighthouse Labs', 'Lighthouse Labs');
assertEqual(1,4);
