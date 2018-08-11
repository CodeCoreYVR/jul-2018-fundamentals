// setTimeout will call a function after certain amount
// of time

/**
 * TAKE ASSIGNMENTS STEP BY STEP
 * TEST AS YOU GO
 */

console.log('Loading ...');

setTimeout(function () {
	console.log('Hello World');
}, 3000);

//  PART 2
/**
 * OPTION 1
 */

const ready = function () {
  console.log('READY');
}

const set = function () {
  console.log('SET');
}

const go = function () {
  console.log('GO');
}

setTimeout(ready, 1000);
setTimeout(set, 2000);
setTimeout(go, 3000);

// 

const x = function (){
  console.log('.');
  setTimeout(x, 1000); //one second
}

x()


