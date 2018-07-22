// Completed Solution
let firstNumber = parseInt(prompt('Give me a number'))
let secondNumber = parseInt(prompt('Give me another number'))

// This is just a loop. We are looping from 1 to 100
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
  // Condition check, is the currentNumber by the firstNumber and the seconNumber?
  if (currentNumber % firstNumber === 0 && currentNumber % secondNumber === 0) {
    console.log('fizzbuzz')

  // Condition check, is the currentNumber by the firstNumber?
  } else if (currentNumber % firstNumber === 0) {
    console.log('fizz')

  // Condition check, is the currentNumber by the secondNumber?
  } else if (currentNumber % secondNumber === 0) {
    console.log('buzz')

  // If none of the above if statements evaluate to true, then just print the currentNumber
  } else {
    console.log(currentNumber)
  }
}
