// Assignment: Stretch Exercise #2b
// Prime Number
// Ask the user for a number x and then print the first x prime numbers.
// Prime numbers are divisible only by 1 and themselves.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let number = parseInt(prompt('Give me a number: '))

isPrime(number)
