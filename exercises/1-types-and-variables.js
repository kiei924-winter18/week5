// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 1-types-and-variables.js

// EXERCISE
// Play craps.
// When executed, this program should print out two random
// numbers, one on each line, simulating the roll of two
// dice. Set two variables, with names that make sense,
// then write them out to the screen. Show the total
// as well.

// HINTS
// Get a random number between 1 and 6 by doing:
// Math.floor(Math.random()*6+1)
// Log output to the screen with console.log(), e.g.
// console.log("hello");

// Define variable for the first die
let die1 = Math.floor(Math.random()*6+1);

// Define variable for the second die
let die2 = Math.floor(Math.random()*6+1);

// Define variable for the total
let total = die1 + die2;

// Write everything out to the screen
console.log(die1);
console.log(die2);
console.log("The total is: " + total);
