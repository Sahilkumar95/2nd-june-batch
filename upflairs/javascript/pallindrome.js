var prompt = require('prompt-sync')();
  let str = prompt("Enter a word:");
  let rev = str.split("").reverse().join("");
  alert(str === rev ? "Palindrome" : "Not a palindrome");

