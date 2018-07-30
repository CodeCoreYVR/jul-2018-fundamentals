// Assignment: Temperature Convertor
// Write a function that takes in a temperature in celsius and returns the
// temperature in Fahrenheit rounded to one decimal point.
// The formula to convert Celsius to Fahrenheit is: F = C * 9/5 + 32
// For example, if the input is 23 the function should return 73.4

function tempConvertor(tempInCelcius) {
  return tempInCelcius * 9/5 + 32
}

tempConvertor(23)

// [Stretch 1]
function tempConvertor(temperatures) {
  let result = []

  for(let celsius of temperatures) {
    result.push(celsius * 9/5 + 32)
  }

  return result
}

tempConvertor([23, 26, 30])


// [Stretch 2]
let temperatureObject = { vancouver: 23, burnaby: 26, seattle: 30 }

function tempConvertor(temperatureObject) {
  let result = {}

  for(const city in temperatureObject) {
    result[city] = temperatureObject[city] * 9/5 + 32
  }

  return result
}

tempConvertor(temperatureObject)


// [Stretch 3]
// It would be very confusing to show you the code for stretch 3, if you care to
// know how. I will show you during class. The solution is essentially a combo
// of all 3 solutions above. ⬆️

