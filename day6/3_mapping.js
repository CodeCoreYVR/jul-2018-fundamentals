// mapping
let numbers = [1,2,3,4,5];
// [1,4,9,16,25]; // square mapping

function square( number ) {
  return number ** 2;
}

function map(arr, fn) {
  let results = [];
  for (let elm of arr) {
    results.push( fn(elm) );
  }
  return results;
}

map(numbers, square)

// TURN CALCULATOR INTO OBJECT BASED

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

const calculator = {
  add: function (number1, number2) {
    return number1 + number2;
  },
  subtract: function (number1, number2) {
    return number1 - number2;
  }
};

console.log( calculator.add(2, 2) );

