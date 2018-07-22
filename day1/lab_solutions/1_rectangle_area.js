// Assignment: [Lab] Rectangle Area
// Write a javascript program that defines two variable width and height and
// then a variable area that calculates the area of the rectangle based on the
// width and height variables.

// Step 1: Ask the user for a width and a height
// Step 2: Do some math...
// Step 3: Print out the answer...

let width = parseInt(prompt('What is the width?'))
let height = parseInt(prompt('What is the height?'))
let area = width * height

console.log(`The area of the rectangle is ${area}`)

// Using Floats... decimal places
let width = parseFloat(prompt('What is the width?'))
let height = parseFloat(prompt('What is the height?'))
let area = width * height

// This rounds the area to two decimal places
let result = Math.round(area * 100) /100

console.log(`The area of the rectangle is ${result}`)
