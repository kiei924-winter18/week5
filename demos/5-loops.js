// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/demos
// or cd c:\code\hello-javascript\demos and type:
// node 5-loops.js

// There will be times where we'll need to loop through a list
// of items (usually this is an array) and do something for each
// element of the array.

// There are many ways to do this in JavaScript, but this is the
// most straightforward:
for (let i=0; i<5; i++) {
  console.log("Bacon");
}

// In plain English, this says to:
// - temporarily define a variable called i (we could have called it anything)
// - do the thing between curly braces {} while i is less than 5
// - increment i by one each time

// Practically speaking, we are almost always looping through an array
// and doing something with each element of the array.
let thingsThatWouldBeBetterWithBacon = ["tacos", "cheeseburgers", "donuts"];

// We could "add bacon" to each element individually:
console.log("Bacon " + thingsThatWouldBeBetterWithBacon[0]);
console.log("Bacon " + thingsThatWouldBeBetterWithBacon[1]);
console.log("Bacon " + thingsThatWouldBeBetterWithBacon[2]);

// But that scales rather poorly. So we use a for-loop to accomplish the
// same task. Instead of "i < 5" or other fixed number, we use .length to 
// determine the length of the array in question.
for (let i=0; i<thingsThatWouldBeBetterWithBacon.length; i++) {
  console.log("Bacon " + thingsThatWouldBeBetterWithBacon[i]);
}
