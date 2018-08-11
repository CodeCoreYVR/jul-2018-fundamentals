// setTimeout will call a function after certain amount
// of time
// ---------- difference
// setInterval will call a function in repetition

/**
 * These 2 blocks of code do the same
 */

const x = function (){
  console.log('.');
  setTimeout(x, 1000); //one second
}

x();


// -----------

setInterval(function() {
  console.log(',');
}, 1000);


