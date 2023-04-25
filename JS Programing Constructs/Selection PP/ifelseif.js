const prompt = require('prompt-sync')();

// Read the number from user
const num = parseInt(prompt("Enter a number: "));

// Define an array of place value names
const placeValues = ['unit', 'ten', 'hundred', 'thousand', 'ten thousand'];

// Determine the number of digits in the number
const numDigits = num.toString().length;

// Loop through each digit and display its corresponding place value
for (let i = numDigits - 1; i >= 0; i--) {
  const placeValue = placeValues[i];
  const digit = Math.floor(num / Math.pow(10, i)) % 10;
  console.log(`${placeValue}: ${digit}`);
}