// Assignment: [Lab] Grade Calculator
// Write a Javascript code that generates a random number for the user's
// score (0 - 100) in a variable score and then prints out their letter grade (F - A+).

// Get a random number between 0 and 100
// Check the score against some conditions
// Use an if, else if, else statement
// STRETCH CHALLENGE: Use a case statement. Google JavaScript Switch Statement


// Get a random number between 0 and 100
let score = Math.floor(Math.random() * 100)

// Check the score against some conditions
if (score >= 86) {
  console.log("A")
} else if (score >= 72) {
  console.log("B")
} else if (score >= 60) {
  console.log("C")
} else if (score >= 50) {
  console.log("D")
} else if (score < 50) {
  console.log("F")
}


// Stretch using switch statement
// Get a random number between 0 and 100
let score = Math.floor(Math.random() * 100)

// Check the score against some conditions
switch (true) {
  case (score >= 86):
    console.log("A")
    break;
  case (score >= 72):
    console.log("B")
    break;
  case (score >= 60):
    console.log("C")
    break;
  case (score >= 50):
    console.log("D")
    break;
  default:
    console.log('F')
}
