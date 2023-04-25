// Read a single digit number and write the number in word using Case
const prompt = require('prompt-sync')(); 
const num = parseInt(prompt("Enter a single-digit number: "));
let numWord;
switch (num) {
  case 0:
    numWord = "Zero";
    break;
  case 1:
    numWord = "One";
    break;
  case 2:
    numWord = "Two";
    break;
  case 3:
    numWord = "Three";
    break;
  case 4:
    numWord = "Four";
    break;
  case 5:
    numWord = "Five";
    break;
  case 6:
    numWord = "Six";
    break;
  case 7:
    numWord = "Seven";
    break;
  case 8:
    numWord = "Eight";
    break;
  case 9:
    numWord = "Nine";
    break;
  default:
    numWord = "Invalid input";
}
console.log(`The number ${num} in words is ${numWord}`);
