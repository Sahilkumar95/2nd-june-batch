var prompt = require('prompt-sync')();
//let num = parseInt(prompt("Enter a number to print its table:"));


  for (let i = 1; i <= 10; i++) {
   // console.log( num * i}`);
  //}


   for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
      console.log("hi");
    }
    else{
        console.log("not divisible by 5");
    }
   }
  let num = parseInt(prompt("Enter a number:"));

  let sum = 0;

  
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log("sum of"+num+"is:"+sum);