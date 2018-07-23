// Assignment: Stretch Exercise #1a
// Print letters
// Write a code that prints letters in increasing number as follows:
let letters = 'abcdefghijklmnopqrstuvwxyz'

for(let i = 0; i < letters.length;) {
  console.log(letters[i].repeat(++i))
}
