var prompt = require('prompt-sync')();
let time = parseInt(prompt("Enter time in 24-hour format (0–23):"));

 
  let greeting = (time >= 0 && time <= 23)
    ? (time < 12 ? "Good Morning" : "Good Afternoon")
    : "Invalid time entered";

 console.log(greeting)