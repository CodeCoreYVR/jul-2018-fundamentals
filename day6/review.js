// good morning!

// what numbers are even?
2, 0, 4, 42, 290840923840
// if the last digit is 0, 2, 4, 6, 8
// if the number divided by 2, gives us no remainder

// what numbers are odd?
1,3,5,7,9,28945947159879872938749

// if the number ends with 1,3,5,7,9
// or if the number divided by 2, gives us a remainder (always 1)

// if (2 / 2 == 0) {}
if (2 % 2 == 0) {}

// % = modulo
// 10 % 2 == 0 (remainder of zero)
// 9 % 2 != 0
// 9 % 2 == 1

// boolean function
// only will return true or false
function isEven( number ) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

isEven(10);
isEven(11);
isEven(12);

if (true) {}

function isEven( number ) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function isEven( number ) {
  return number % 2 == 0;
}
// arrow function

function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  return number % 2 != 0;
}

// expression vs statements

let name = "Jacob"; // <- statement
5 + 5; // <- expression

if (true) {} // <- statement
while (true) {} // <- statement

function isEven(number) {} // <- expression

function doNothing() {}
function add(number1, number2) {
  return number1 + number2;
}

add(5,6);
11;

add(5,6) == 11; // true







//
