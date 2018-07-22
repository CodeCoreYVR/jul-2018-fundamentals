// LOOPS
// Execute the same code a set number of times
// There are multiple types of loops.
// Today we are going to show demonstrate the two basic ways.
//   - while loop
//   - for loop


// While Loop
// Loops will execute the code inside as long as the condition is true.
// The most important part of a for loop is the condition.
// Without a valid condition, the loop will never stop and go on forever.
// This is known as an infinte loop

// You can write a while loop in Javascript as follows.
while (condition) {
  // the code you want to repeat...
}


// Example of infinite loop
// There is no condition other than true, it will go on infinitely
while (true) {
  console.log("Hello");
}


// When you have no condition, You can stop a for loop with Brute Force...
// Use the break keyword to stop the loop
while (true) {
  console.log('>>>', 'this is true');
  break;
}
// This will only print 1 time.


// Example of using a condition to stop the loop
// if counter is less than 5 then run the code else exit
let counter = 0

while (counter < 5) {
  console.log('counter', counter);
  counter ++
}

// What is the ++ ?
// This is know as incrementing, it increases the value by 1
// This works with subtraction. -- decreases the value by 1

// Incrementing
// pre increment, adds 1 to that value, then gives you the current value
let counter = 10
++ counter
// post increment, gives you the current value, then adds 1 to that value
let counter = 10
counter ++


// Decrementing
// pre decrement, subtracts 1 to that value, then gives you the new value
let counter = 10
-- counter
// post decrement, gives you the current value, then adds 1 to that value
let counter = 10
counter --


// Another way is to use the += operator
let counter = 10
counter += 1
// this adds 1, and gives you the new value

// basically this is the short for of the followin...
let counter = 10
counter = counter + 1



// Exercise: Use a while loop to log the number from 1 up to 100 the console.
let counter = 1

while (counter <= 100) {
  console.log('The value of counter is...', counter)
  counter ++
}






// For Loop
// Like a while loop, a for loop repeats until the condition evaluates to false.
// The syntax is more compact but has the same elements as most while loop
// initializer, where do we start?
// condition, what needs to be true?
// increment, simply add 1 to the initializer
for (initializer; condition; increment) {
  // ...
}

// Example of a basic for loop
for (let i = 0; i < 5; i++) {
  // Print each iteration to the console
  console.log(i);
}

// Looking at our while loop that prints 1 to 100...
// We can use the exact same pieces to create a for loop
let counter = 1 // 1. initializer

while (counter <= 100 /* 2. condition */) {
  console.log('The value of counter is...', counter)
  counter ++ // 3. increment
}

// This for loop is the equivalent of the above while loop
for (let counter = 1; counter <= 100; counter++) {
  console.log('The value of counter is...', counter)
}


// Exercise: Bottles of Beer
// Use a for loop to implement the "bottles of beer" rhyme
for (let bottles = 100; bottles >= 0; bottles --) {
  if (bottles === 0) {
    console.log('There are no bottles of beer left');
  } else {
    console.log(`${bottles} bottles of beer`)
  }
}


// Exercise: Print the numbers that are between 0 and 100, that are divisible by 3
for (let counter = 0; counter <= 100; counter++) {
  if (counter % 3 === 0) {
    console.log(`${counter} is divisible by 3`)
    // Below is the equivalent of template strings pre 2015
    // console.log(counter + " is divisible by 3")
  }
}






//
