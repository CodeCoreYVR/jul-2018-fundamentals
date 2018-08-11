// setTimeout executes after x amount of time

// Syntax:
// setTimeout ( fn, amountOfTime ); // in milliseconds
setTimeout(function () {
  console.log('hello world!!');
}, 100);

// it is a buildt in high order function
const printHello = function() {
  console.log('hello there');
};
const timeToPassInMilliseconds = 2000; // 2 seconds

// this function receives a callback
setTimeout(printHello, timeToPassInMilliseconds);

// Lets use a callback with a user defined function

const func1 = function (callback) {
  console.log ('hello before callback is called')
  callback();
}

// Very popular way of defining callbacks
const func2 = function (cb) {
  cb();
}

const func3 = function (done) {
  done();
}

// we are passing an annonymous function to another
// function
func1( function () {
  console.log('Hello world from annonymous function');
});



