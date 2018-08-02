
// good evening everyone!
// day 1
// JavaScript
// Brendan Eich - 10 days at Netscape Navigator
// ECMAScript 6.0

// variables
// memory
let sum = 5 + 5;

console.log(sum);
document.write(sum);
window.alert(sum);

let result = sum * 2 + 4 / 3;

let a = 10;
let b = 5;

let c = a*a + b*b;

// logic gates
// farm
if (true) {
  console.log("Welcome!");
}

if (5 > 4) {
  console.log("Hello!");
} else {
  console.log("Goodbye!");
}

// > < >= <= == === ! && ||

// loops - iteration
// animation
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

let counter = 1;

while (counter <= 1000) {
  console.log(counter);
  counter++;
  // counter = counter + 1;
}

// day 2
// HTML - Hyper Text Markup Language
// Sir Tim Berners Lee
<html>
  // a - tag name
  // href - attribute
  // "" - value
  // Fun! - innerText, innerHTML
  <a href="http://pne.com/">Fun!</a>
  <form>
    <input type="text">
    <input type="submit">
  </form>
</html>

// day 3
// javascript
// arrays
// chain, organized set of data
// indexed list of data or information

// todoList
// shoppingList
// packingList
// students
// friends
// products
               //  0      1      2      3
let students = ["rosa", "sam", "tim", "brad"];
students[2]; // "tim"

students[4] = "sam";
students[8] = "elon";

// functions
// rule, set of instructions that are performed when called
// bodily function!

// repetition of code
// morning!
// wednesday
console.log("wake up");
console.log("brush my teeth");
console.log("get changed");
console.log("drink water");
console.log("commute to work");
console.log("code");

// thursday
console.log("wake up");
console.log("brush my teeth");
console.log("get changed");
console.log("drink water");
console.log("commute to work");
console.log("code");

// friday
console.log("wake up");
console.log("brush my teeth");
console.log("get changed");
console.log("drink water");
console.log("commute to work");
console.log("code");

function morning() {
  console.log("wake up");
  console.log("brush my teeth");
  console.log("get changed");
  console.log("drink water");
  console.log("eat breakfast");
  console.log("commute to work");
  console.log("code");
}

// wednesday
morning();
// thursday
morning();
// friday
morning();

// mathematics
// number is a parameter
function addOne(number) {
  console.log(number + 1);
}

// execute or call a function
// 6 is an argument
addOne(6);

function add(number1, number2) {
  console.log(number1 + number2);
}

add(5, 6);
add(3.14159, 1234566778.95);

function add(number1, number2, number3, number4) {
  console.log(number1 + number2 + number3 + number4);
}

add(5, 6, 7);
// for (let i=0; i<10; i++) {
//   addOne();
// }


// rest parameter
function add(...numbers) {
  // numbers is an array
  console.log(numbers);
}

add(5);
add(5, 6);
add(5, 6, 7);
add(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

// iterate over an array
// loop        0 1 2 3 4 5
let numbers = [5,6,7,8,9,10];
numbers[0]; // 5
numbers[1]; // 6
numbers[2]; // 7
numbers[3]; // 8
numbers[4]; // 9
numbers[5]; // 10

// used to iterate over arrays
for (let number of numbers) {
  console.log(number);
}

let numbers = [12, 24, 33, 41, 42, 46];

for (let number of numbers) {
  console.log(number);
}


function add(...numbers) {
  // numbers is an array
  // console.log(numbers);
  let total = 0;

  for (let number of numbers) {
    total += number;
    // total = total + number;
  }

  // console.log(total);
  return total;
}

add(5,6,7,8) == 26;

// functions are values
// what is value?
// what is an expression?
// what is a statement?


// objects - set of attributes
// detectable by your senses

// properties, keys....
// table is an object
// i can describe a table by:

// it has 4 legs
// smooth
// particle board
// white

// object initializer
// const dog = new Object();
// property value pairs
const dog = {
  name: "Summer",
  age: 3,
  breed: "Golden Doodle",
  trick: "sit"
};

students[4]; // "Tim"

// access data in our object
// dot operator
dog.age; // 3

// arrays are objects
// objects are the basis for anything meaningful in programming!
let students = ["rosa", "tim", "sam", "sam"];
students[1]; // "tim"

const students = {
  0: "rosa",
  1: "tim",
  2: "sam",
  3: "sam"
};

students[1];

const dog = {
  name: "Summer",
  age: 3,
  breed: "Golden Doodle",
  trick: "sit"
};

dog["age"]; // 3

// variables
let selectedProperty = "trick";
dog[selectedProperty]; // "sit"

let property = "trick";
dog[property];

// iterating over an object
// for (let property in object) {
//
// }

const dog = {
  name: "Summer",
  age: 3,
  breed: "Golden Doodle",
  trick: "sit"
};

for (let property in dog) {
  console.log(property);
  console.log(dog[property]);
}
// Object.keys(dog);







// .... day 4: CSS
