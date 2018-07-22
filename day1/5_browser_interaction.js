// Browser Interaction
// There are three simple ways we can use to interact with a web page

// Alert
// Generally used just used to notify a user.
alert("Hi There!");


// Prompt
// Use to capture input from a user
// Opens a popup window with an input field
let firstName = prompt('What is your name?');


// Using Confirm
// You can use confirm to open up a window with ok & cancel button
// ok returns true
// cancel returns false
let proceed = confirm('Do you want to continue?');

if (proceed) {
  console.log('OK, lets go!!!!')
} else {
  console.log('BYEEEEE')
}





// Template Strings
// New Feature to es6
// This allows use to interpolate variables into strings or text
let food = 'Sandwich'
console.log(food)

// What if we wanted to make it into a sentence?

// Old style, hard to read, tedious
console.log('I like eating ' + food + ' for lunch.')

// es6 style
console.log(`I like eating ${food} for lunch.`)

// The back ticks combined with ${} allow us to evaluate code inside
console.log(`My favourite number is ${23 * 5}`)



// We can combine everything together
let firstName = prompt('What is your name?')
let proceed = confirm('Do you want to continue?')

if (proceed) {
  alert(`Hello ${firstName} nice to meet you!`)
} else {
  alert(`BYEEEEE ${firstName}`)
}
