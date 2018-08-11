// a class is a blueprint that describes an object
// A CLASS IS A TEMPLATE FOR AN OBJECT

// this is how we create an object out of the
// Date class
// Built in class
const today = new Date();
console.log( today.getDay );

// User defined class
class Home {
  printNumberOfRooms () {
    console.log('this house has 3 rooms')
  }
}

let myPlace = new Home();

let home2 = {
  printNumberOfRooms: function () {
    console.log('this home has 4 rooms')
  }
}
