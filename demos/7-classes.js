// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/demos
// or cd c:\code\hello-javascript\demos and type:
// node 7-classes.js

// Modern software development almost always involves the concept
// of Object-Oriented Programming (OOP). OOP is a programming 
// paradigm based on the concept that a software application is
// a collection of *objects*, which can contain data (attributes)
// as well as functions.

// For example, if you were building an ecommerce system, here
// are some of the objects you might include:
// - Product
// - Customer
// - Order

// That's the theory; how do we actually implement this idea in
// JavaScript? There are two main ways.

// Consider the following object:
let dog = {
  breed: "Labrador Retriever",
  color: "Black",
  speak: function() {
    console.log("Woof");
  }
}

// We're able to ask this object for its data (attributes)...
console.log(dog.color); // Black

// ...and ask it to do something
dog.speak();

// That's cool, but it only allows for one dog. And if you only need
// one dog in your application, then this works perfectly fine.
// However, sometimes we'll need to have more than one of something.
// This is where *classes* come in. You can think of a class as a 
// template for your objects. (BTW, class names start with a capital letter!)

class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  speak() {
    console.log("Woof");
  }
}

let rex = new Dog("Labrador Retriever", "Black");
console.log(rex.color); // Black
rex.speak();