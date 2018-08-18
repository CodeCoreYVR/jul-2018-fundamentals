// higher order - function within a function, recursion...
// a function that takes in a function as an argument
// a function that returns a function

// function are values
// functions are expressions

function addOne( number ) {
  return number + 1;
}

addOne(10); // 11

11 === addOne(10); // true

// a function that has no name is an anonymous function
// function expression
// expressive function
let addOne = function(){};

// addOne === fn();
addOne();

addOne(); // this works
function addOne() {}

addOne(); // this will not work
let addOne = function(){};
addOne();

// higher order functions
function runThree( fn ) {
  fn();
  fn();
  fn();
}

function sayHi() {
  console.log("hi!");
}

runThree( sayHi );

// built in higher order function
// TIMING FUNCTIONS
// setTimeout(fn, delay);
// delay is in ms, 1000ms == 1sec
function sayHi() {
  console.log("hi!");
}

setTimeout( sayHi, 2000 );

// event loop

// bread
// salad
// calamari
// steak
// creme brulee

// asynchronous
setTimeout( function(){ console.log("bread") }, 500 );
setTimeout( function(){ console.log("creme brulee") }, 15000 );
setTimeout( function(){ console.log("calamari") }, 4000 );
setTimeout( function(){ console.log("steak") }, 6000 );
setTimeout( function(){ console.log("salad") }, 2000 );

// function setInterval(fn, delay) {
//   ...
//   return uniqueId;
// }
let counter = 0;

let id = setInterval( function(){
  console.log("bread");
  counter++;

  if (counter > 3) {
    clearInterval(id);
  }
}, 500 );

// methods - a function that belongs to an object or class
// method acting, behaviour
// methods are functions
// routine is like a function

const mario = {
  // properties
  profession: "plumber",
  favouriteFood: "pizza",
  age: 40,
  // behaviour, methods
  run: function() { console.log("mario is running!") },
  jump() { console.log("mario is jumping!!") }
};

// dot operator
mario.profession; // "plumber"
mario["profession"]; // "plumber"

mario.run; // returns a function
mario.run();
mario.jump();

// shoppingList.push("cheese");
// numbers.sort();

// classes
// blueprints, describing objects, types, ....

// blueprint
class House {
  // constructor
  constructor( colour ) {
    console.log(`A new ${colour} house was built!`);
    this.colour = colour;
  }
}

const bungalow = new House("pink");
const townhouse = new House("grey");
const condo = new House("white");

bungalow.colour;

// let shoppingList = new Array();
// let shoppingList = [];
// const me = new Object();
// const me = {};






//
