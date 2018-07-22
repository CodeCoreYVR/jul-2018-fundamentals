// Assignment: [Demo] Bigger number
// Write a Javascript code that defines two variables x and y with numbers and
// then prints to the console the larger of the two number printing.
// For instance print "The larger number is x"

// Step 1: Ask the user for two numbers
// Step 2: Compare the two answers, if statement?
// Step 3: Print out the answer...

let x = parseInt(prompt('Please give me a number.'))
let y = parseInt(prompt('Please give me another number.'))

// console.log('the value of x is...', x)
// console.log('the value of y is...', y)

if (x > y) {
  console.log('x is greater than y')
} else if (y > x) {
  console.log('y is greater than x')
} else if (x === y) {
  console.log('both x and y are equal')
}
