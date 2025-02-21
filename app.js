import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
 
console.log('Add: ', add(24, 23));
console.log('Subtract: ', subtract(69, 22));
console.log('Uppercase: ', toUpperCase('hello'));

 
console.log('Multiply: ', multiply(4, 5));

import { findMax, reverseArray } from './arrayModule.js';
 
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

import { addAndLogUpper } from './mathModule.js';
 
addAndLogUpper(10, 20);

function processArray(arr, multiplier) {
    const max = findMax(arr);
    const result = max * multiplier;
    return toUpperCase(result.toString());
}

console.log(processArray([2, 9, 7], 3));