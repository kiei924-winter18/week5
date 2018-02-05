// To run this code, be sure you're in the right directory;
// e.g. cd ~/code/hello-javascript/exercises
// or cd c:\code\hello-javascript\exercises and type:
// node 4-objects.js

// EXERCISE
// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen. Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 67,
    conditions: "Sunny"
  },
  forecast: [
    { temperature: 65, conditions: "Mostly Cloudy" },
    { temperature: 70, conditions: "Partly Cloudy" }
  ]
}
