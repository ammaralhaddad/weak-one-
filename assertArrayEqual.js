const assertArraysEqual =function (array1, array2)  {
   if (eqArrays(arr1, arr2)) {
     console.log(`Assertion Passed: [${array1}] and [${array2}] are equal.`);
   } else {
     console.log(`Assertion Failed: [${array1}] and [${array2}] are NOT equal.`);
   }
 };





 assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
 assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should fail
 assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
 assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should fail 
