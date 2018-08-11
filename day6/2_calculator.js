// calculator example

// buttons on a calcutor
// writing simple mathematical functions
function add(number1, number2) { return number1 + number2 }
function subtract(number1, number2) { return number1 - number2 }
function multiple(number1, number2) { return number1 * number2 }
function divide(number1, number2) { return number1 / number2 }

// calc is going to be a higher order function
// it will take in a function as an argument
function calc(number1, operation, number2) {
  return operation(number1, number2);
}

calc(5, add, 5);
calc(5, subtract, 5);
calc(5, divide, 5);

// programmable remote control
