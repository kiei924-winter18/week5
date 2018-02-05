// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/demos
// or cd c:\code\hello-javascript\demos and type:
// node 6-functions.js

// Sometimes it's not enough to store strings, numbers, and 
// other simple things in variables so you can use them again.
// Sometimes you'll want to store actual functionality in a 
// variable. To do this, we'll need to use *functions*.

// There are built-in functions (i.e. native to JavaScript) and
// your own functions.

// Let's define our first function. It's just like defining any
// other variable, except for this weird "function() {}" syntax.
let sayHello = function() {
  console.log("Hello!");
}

// Now, let's execute (or "call") the function:
sayHello();

// Easy enough. The function we're written, when called, simply
// writes a message to the screen. So we can call this function
// whenever we want now. Let's make it more useful by adding
// a parameter to it:
sayHello = function(yourName) {
  console.log("Hello " + yourName + "!");
}

// We've changed the function and added a parameter that can be 
// passed to it. The function's definition (the meat in between the
// curly braces) uses the argument that's given to it to make the
// function more flexible.
sayHello("Brian");

// So far, we've written a function that does something, that is, 
// writes a message to the screen. Occasionally, we'll need to write
// a function like this. More typically, however, we write to write
// a function that has a *return value*, i.e. you give it some input(s)
// and it returns some output. Starting to sound like a barista?
let withEnthusiasm = function(words) {
  return words.toUpperCase() + "!!!!";
}

console.log(withEnthusiasm("bacon tacos"));
