/**
 * METHODS
 */

// Function 

// THIS IS A FUNCTION BECaUSE it is outside
// of an object
const sayHelloWorld = function () {
  console.log( 'hi' );
}

sayHelloWorld();

const exampleObj = {
  // this is a method because it is inside
  // an object
  sayHelloWorld: function () {
    console.log('hi from an object')
  }
};