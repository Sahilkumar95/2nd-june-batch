var prompt = require('prompt-sync')();

let marks = parseInt(prompt("Enter your marks (0 - 100): "));

if (marks >= 0 && marks <= 30) {
    console.log("Fail");
} else if (marks > 30 && marks <= 50) {
    console.log("Grade: C");
} else if (marks > 50 && marks <= 70) {
    console.log("Grade: B");
} else if (marks > 70 && marks <= 100) {
    console.log("Grade: A");
} else {
    console.log("Invalid input! Please enter marks between 0 and 100.");
}
