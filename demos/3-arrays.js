// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/demos
// or cd c:\code\hello-javascript\demos and type:
// node 3-arrays.js

// Arrays are lists of things. We can build an array out of different
// types of things, or even combine types of things if we want.
let theBestThings = ["tacos", "pizza", "burgers", "kale"];
console.log(theBestThings);

let weHaveToGoBack = [4, 8, 15, 16, 23, 42];
console.log(weHaveToGoBack); // if you don't understand, you have a lot of TV watching to do

let mixedArray = ["tacos", 12, true];
console.log(mixedArray);

// The elements of an array can be anything, even other arrays
let shoppingList = [["milk", "eggs", "taco shells"], ["soap", "shampoo", "shaving cream"]];
console.log(shoppingList);

// We access elements of an array by using the square brackets [] and
// a number, which represents the *0-based* index of the element we want
console.log(theBestThings[0]); // the first element of the array

// How about that array of arrays? Let's access the 3rd element of the second array:
console.log(shoppingList[1][2]); // shaving cream

// We add things to an array by using the push() function
theBestThings.push("bacon");
console.log(theBestThings);

// There are all sorts of fun things you can do with arrays
// Read the documentation!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log(theBestThings.sort().reverse().indexOf("pizza"));