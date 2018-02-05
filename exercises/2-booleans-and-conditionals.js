// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 2-booleans-and-conditionals.js

// EXERCISE
// Continue your craps program.
// When executed, this program should print out two random
// numbers, one on each line, simulating the roll of two
// dice. Set two variables, with names that make sense,
// then write them out to the screen.
// If the numbers add up to 7 or 11, write a message that reads
// "YOU WIN!", if they add up to 2, 3, or 12, write a message
// that reads "YOU LOSE!", otherwise, write a message that
// reads "THE POINT IS {number}"

// HINTS
// Get a random number between 1 and 6 by doing:
// Math.floor(Math.random()*6+1)
// Log output to the screen with console.log(), e.g.
// console.log("hello");
// We can specify multiple conditions with || (OR) and && (AND)
// if (dinner === "tacos" || dinner === "pizza")

// The same code from the first exercise
let die1 = Math.floor(Math.random()*6+1);
let die2 = Math.floor(Math.random()*6+1);
let total = die1 + die2;
console.log(die1);
console.log(die2);
console.log("The total is: " + total);

// Test if the total is 7 or 11, and if so, write YOU WIN! to the screen
if (total === 7 || total === 11) {
  console.log("YOU WIN!");
// Test if the total is 2, 3, or 11, and if so, write YOU LOSE... to the screen
} else if (total === 2 || total === 2 || total === 12) {
  console.log("YOU LOSE...");
// If the total is anything else other than 7, 11, 2, 3, or 12
} else {
  console.log("THE POINT IS " + total);
}
