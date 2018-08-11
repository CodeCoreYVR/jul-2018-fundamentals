// This keyword holds information 
// A CLASS


class Home {

  // built method
  // (gets called when creating object)
  constructor (numberOfRooms) {
    this.numberOfRooms = numberOfRooms;
  }

  // User defined method
  printNumberOfRooms () {
    console.log(` this house has ${this.numberOfRooms} rooms `)
  }

  touchThis () {
    return this;
  }
}

// creates an object
let myPlace = new Home(2);
myPlace.printNumberOfRooms();
console.log(myPlace.touchThis())

let newObject = new Home(5);
newObject.printNumberOfRooms();

// creates an object
let myPlace = new Home(2);
myPlace.printNumberOfRooms();
console.log( myPlace.touchThis() )

// compare value and type
console.log( myPlace.touchThis() === myPlace )

// comparing just the value
console.log( myPlace.touchThis() == myPlace )

console.log(3 == 3)
console.log(3 == "3")

// what is the type of myPlace
console.log( typeof(myPlace) );
console.log( typeof(Home) );

// different ways of calling functions
const helloWorld = function() {
	console.log('helloWorld function was created')
}

helloWorld();
new helloWorld()





