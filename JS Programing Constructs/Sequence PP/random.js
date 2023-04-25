const randomDigit = Math.floor(Math.random() * 10); // generates a random integer between 0 and 9 (inclusive)
console.log("single digit Random is : " + randomDigit); // prints the random digit to the console


const diceRoll = Math.floor(Math.random() * 6) + 1; // generates a random integer between 1 and 6 (inclusive)
console.log("Random Dice Number : " + diceRoll); // prints the dice roll number to the console


const dice1 = Math.floor(Math.random() * 6) + 1; // generates a random integer between 1 and 6 (inclusive)
const dice2 = Math.floor(Math.random() * 6) + 1; // generates a random integer between 1 and 6 (inclusive)
const sum = dice1 + dice2; // adds the two dice roll numbers together
console.log(`The sum of ${dice1} and ${dice2} is ${sum}`); // prints the sum to the console


let sum1 = 0;
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 90) + 10; // generates a random two-digit number
  sum1 += randomNumber; // adds the random number to the sum
  console.log(`Random number ${i+1}: ${randomNumber}`);
}
const average = sum1 / 5; // calculates the average of the 5 random numbers
console.log(`Sum of the random numbers: ${sum1}`);
console.log(`Average of the random numbers: ${average.toFixed(2)}`);


// Part a
const inches = 42;
const feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);
// Part b
const feetToMeters = 0.3048; // 1 foot = 0.3048 meters
const lengthFeet = 60;
const widthFeet = 40;
const lengthMeters = lengthFeet * feetToMeters;
const widthMeters = widthFeet * feetToMeters;
console.log(`The rectangular plot is ${lengthMeters} meters x ${widthMeters} meters`);
// Part c
const areaFeet = lengthFeet * widthFeet;
const areaAcres = areaFeet / 43560 * 25;
console.log(`The area of 25 plots is ${areaAcres} acres`);
