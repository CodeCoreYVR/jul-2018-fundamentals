// mapping
let numbers = [1,2,3,4,5];
// [1,4,9,16,25]; // square mapping

function square( number ) {
  return number ** 2;
}

function map(arr, fn) {
  let results = [];
  for (let elm of arr) {
    results.push( fn(elm) );
  }
  return results;
}

map(numbers, square)
