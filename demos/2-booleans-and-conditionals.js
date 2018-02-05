// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/demos
// or cd c:\code\hello-javascript\demos and type:
// node 2-booleans-and-conditionals.js

// In addition to Number and String, Boolean (true or false) is another type
console.log(true);

// The triple equals (===) tests for equality
console.log(2 === 2); // true
console.log(2 === 3); // false

// We can use conditionals (if-else) to conditionally run code
if (2 === 3) {
  console.log("You're not supposed to be here!");
} else {
  console.log("Whew!");
}

// Multiple conditions can be applied using "else if"
let dinner = "tacos";

if (dinner === "tacos") {
  console.log("Awesome!!!")
} else if (dinner === "sandwiches") {
  console.log("Alright!")
} else if (dinner === "kale") {
  console.log("Noooooo")
} else {
  console.log("Ok...")
}