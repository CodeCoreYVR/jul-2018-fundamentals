// clearInterval ends setInterval repetition

// print a message
const printMessage = function() {
  console.log('.')
}

// setInterval will execute printMessage every second
const intervalIdentifier = setInterval(printMessage, 1000)

// clearInterval will stop the execution of setInterval
// with the id we received and stored in intervalIdentifier
clearInterval(intervalIdentifier);