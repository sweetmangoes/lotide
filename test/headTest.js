const assertEqual = require('../assertEqual'); 
const head = require('../head'); 

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,8,5]), 5);
assertEqual(head(["Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");