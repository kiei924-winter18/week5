// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 7-classes.js

// Be the next Mark Zuckerberg and create your own social
// network. Create two classes so that the code provided works,
// and produces the following output:

// [ Status {
//     user: 'Brian',
//     body: 'LOL just creating creating my own social network in KIEI-924',
//     characterCount: 60 },
//   Status {
//     user: 'Biff Tannen',
//     body: 'Very misleading! Sad!',
//     characterCount: 21 } ]

// HINT
// Use .push() on an array to add an item

let bookface = new SocialNetwork();
bookface.addStatus(new Status("Brian", "LOL just creating creating my own social network in KIEI-924"));
bookface.addStatus(new Status("Biff Tannen", "Very misleading! Sad!"));
console.log(bookface.timeline);