// writing a function (version 5 way)

function doubleIt (number) {
  return number * 2
}

console.log(doubleIt())

// writing a function (version 6 way)

const tripleIt = function (number) {
  return number * 3
}

console.log(tripleIt(4))

const logHello = function () {
  console.log('hello')
}

// function with if else statement
const numberDescription = function (number) {
  if (number > 100) {
    console.log('big number')
  } else if (number > 0) {
    console.log('small number')
  } else {
    console.log('negative number')
  }
}

numberDescription(150)
numberDescription(50)
numberDescription(-5)

// Exercise 1
const insult = function (name) {
  return `${name}, you doofoos`
}

console.log(insult('some random person'))

// Exercise 2
const increment = function (number) {
  return number += 1
}

console.log(increment(10))

// Exercise 3
const repeat = function (string, number) {
  for (let i = 0; i < number; i++) {
    return string
  }
}

console.log(repeat('coding is awesome!', 5))

// Scoping

let number = 5

let a = 'I am global'

const scopeExample = function () {
  let a = 'I am local'
  console.log(a)
}

const numbersArray = [3,64,3,56,34,12,5,0]

const smallestLargestNumber = function (numbers) {
  let smallest = numbers[0]
  let largest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]
    }
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
  }
  return [smallest, largest]
}

smallestLargestNumber(numbersArray)

const cities = { vancouver: 603502, burnaby: 223220, langley: 104177 }

const citySize = function (cities) {
  for (let city in cities) {
    let cityName = city[0].toUpperCase() + city.slice(1)
    if (cities[city] > 150000) {
      console.log(`${cityName} is a large city`)
    } else {
      console.log(`${cityName} is a small city`)
    }
  }
}

citySize(cities)

const names = { mike: 2, john: 3, jen: 5, eli: 1}

const popularName = function (names) {
  let mostPopular = ''
  let occurences = ''
  for (let person in names) {
    if (names[person] > occurences) {
      mostPopular = person
      occurences = names[person]
    }
  }
  return `the most popular name is ${mostPopular}`
}

console.log(popularName(names))

const frequencyOfLetters = function () {
  let result = {}
  let input = prompt('Enter a word or sentence')

  for (let letter of input) {
    if (result[letter]) {
      result[letter] ++
    } else {
      result[letter] = 1
    }
  }
  return result
}

frequencyOfLetters()
