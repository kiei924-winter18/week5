// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/demos
// or cd c:\code\hello-javascript\demos and type:
// node 4-objects.js

// Objects are kinda the most important type of thing in JavaScript,
// mostly because you can use them to store any type of data, no
// matter how complex.

// Objects are lists of *key-value pairs*. Keys are the names of 
// attributes which describe the object, and the values are the
// attributes themselves.

// Let's start easy... let's define a simple object that represents my social media profile:
let me = { name: "Brian", location: "Chicago", status: "KIEI-924 at Kellogg!" };
console.log(me); 

// Now that the object is defined, we can access the attributes that we want by 
// using "dot notation":
console.log(me.name); // Brian
console.log(me.location); // Chicago

// Things get more interesting when the values are also objects:
let myProfile = { name: "Brian", location: { city: "Chicago", state: "Illinois" }, status: "KIEI-924 at Kellogg!" };
console.log(myProfile);

// We can "chain" the dots together to access data about more complex objects:
console.log(myProfile.location.city); // Chicago
console.log(myProfile.location.state); // Illinois

// We can also add or redefine attributes of an object after it's been created:
myProfile.name = { first: "Brian", last: "Eng" }
console.log(myProfile);

// These are simple examples. In a real-world application, objects tend to be more
// complex, and are made up of multiple nested objects and arrays.
let completeProfile = { name: { first: "Brian", last: "Eng" },
                        location: { city: "Chicago", state: "Illinois" },
                        timeline: [{ status: "Eating tacos", posted: "7:30am" },
                                   { status: "Brushing teeth", posted: "8:00am" },
                                   { status: "Eating more tacos", posted: "9:00am" }] }

// And we might have to jump through a few hoops to get the data we're looking for:
console.log(completeProfile.timeline[0].status); // Eating tacos