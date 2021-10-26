const assertEqual = function(a,b){
  if (a === b){
  
  console.log(`Assertion Passed:${a}===${b}`)
  
  
  }else{
  
    console.log(`Assertion Failed: ${a} !== ${b}`)
  }
}
  const eqArrays = function (array1, array2)  {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };





assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should fail 
