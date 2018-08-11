// passing functions
let greet = function() {
  console.log("hello!");
}


let utility = greet;
let tool = greet;
utility();
tool();

tool = utility;
tool();


let age = 39;

function happyBirthday( years ) {
  console.log(`Jacob is ${years} years old`);
}
//
// let happyBirthday = function ( years ) {
//   console.log(`Jacob is ${years} years old`);
// }

happyBirthday(age);

// let jacob;
// typeof jacob;
// console.log( jacob );


//
let sayHi = function() {
  console.log("hi!");
}

let sayHola = function() {
  console.log("hola!");
}

// greet is a higher order function
// because it takes in an function as an argument
function greet( fn ) {
  // inside it's block, it executes the function being passed in
  fn();
}

// we are calling greet, passing in the sayHi variable
// what is sayHi?  it is an expressive function
greet(sayHi);
greet(sayHola);











//
