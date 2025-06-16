 var prompt = require('prompt-sync')();
 function calculateSum(array) {
  let sum = 0; 
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; 
  }
  return sum; 
}
let numbers = [10, 20, 20, 40];
let result = calculateSum(numbers);
console.log("Sum of array:", result); 


//reverse an array
function reverseArray(a) {
  let reversed = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reversed.push(a[i]);
  }
  return reversed;
}


let original = [1, 2, 3, 4, 5];
let reversed = reverseArray(original);
console.log("Reversed Array:", reversed);


