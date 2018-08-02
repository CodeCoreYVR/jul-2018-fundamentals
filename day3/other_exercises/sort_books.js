// Assignment: Sort your books
// Write some code that keeps asking the user for book names until the user
// enters "exit". After typing exit the program should display all the entered
// book names sorted by the book name.

let library = []

while(true) {
  let book = prompt('Give me a book name: ')

  if (book && book.toLowerCase() == 'exit') {
    break
  } else {
    library.push(book)
  }
}

console.log(library.sort())
