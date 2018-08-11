// functions

// morning routine
console.log("wake up");
console.log("eat breakfast");
console.log("transit");
console.log("code");

console.log("wake up");
console.log("eat breakfast");
console.log("transit");
console.log("code");

console.log("wake up");
console.log("eat breakfast");
console.log("transit");
console.log("code");

// declaring the function
function morning() {
  console.log("wake up");
  console.log("eat breakfast");
  console.log("bike to work");
  console.log("code");
}

// call/execute the function
morning();
morning();
morning();
morning();
morning();

// math
// number is a parameter
function square( number ) {
  return number ** 2;
  // return number * number;
}
console.log(number); // not exist

// 5 is an argument
square(5);


function add(number1, number2, number3) {}
// ... rest parameter
// all the arguments passed are stored in an array
function add(...numbers) {}

// 2 ways to declare functions
// declaritive syntax
greet();

function greet() {
  console.log("hello!");
}

greet();

// a function that is registered into the global namespace

// expressive syntax
// anonymous function, a function that has no name
let greet = function() {
  console.log("hello!");
};

greet == function() {console.log("hello!")};

greet();



//




let greet = function() {
  console.log("hello!");
};


greet();



//
