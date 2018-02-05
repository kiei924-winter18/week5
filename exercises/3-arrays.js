// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 3-arrays.js

// EXERCISE
// Create a "shared" shopping list with your friend
// Create two data structures - one for your list of stuff, and one
// for your friend, e.g. you want milk, eggs, and bacon, and
// your friend wants beer, cookies, and apples.
// Programmatically combine the two arrays into a single list,
// sort the result (alphabetically), and write it to the screen.

// HINTS
// Learn to read the documentation!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// concat(), sort() functions

// Define a variable (an array) for Brian's shopping list
let briansList = ["tacos", "bacon", "more tacos"];

// Do the same for Ben's list
let bensList = ["kale", "spinach", "some other vegetable"];

// Create a combined (concatenated) list
let combinedList = briansList.concat(bensList);

// Create an alphabetically sorted list
let sortedList = combinedList.sort();

// Write the sorted list to the screen
console.log(sortedList);
