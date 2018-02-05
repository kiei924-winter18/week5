// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 6-functions.js

// EXERCISE
// Write a function called dealHand that allows an argument specifying
// the number of cards to be dealt. For example, dealHand(5) should
// return an array of 5 cards. The shuffledDeck() function already written
// returns a shuffled array of all 52 cards.

// HINT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// Don't mess with shuffledDeck() -- it already works, I promise.
let shuffledDeck = function() {
  // builds the deck, in order
  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  let deck = [];
  for (let x=0; x<ranks.length; x++) {
    for (let y=0; y<suits.length; y++) {
      deck.push(ranks[x] + " of " + suits[y]);
    }
  }
  // shuffles the deck
  let currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

let dealHand = function(numberOfCards) {
  return "the number of cards you want is " + numberOfCards;
}

console.log(dealHand(5));