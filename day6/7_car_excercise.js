// User Defined Class
class Car {

  // built in method
  // gets called every time we create a new
  // object
  constructor (speed) {
    this.speed = speed;
  }

  park () {
    console.log('Parking!')
  }
  
  // returns a string
  es () {
  	let ees = '';
//     once i equals to 149
  	for ( var i = 0; i < this.speed; i++ ) {
    	ees += 'e';
    }
    return ees;
  }

  stop () {
    if ( this.speed > 120 ) {
      console.log(`Scr${this.es()}tch `);
    } else if (this.speed > 80 && this.speed < 120) {
      console.log('Medium');
    } else if (this.speed < 80) {
      console.log('slow');
    } else {
      console.log('Yikes');
    }
  }

  // common issues
  // print park () {}
  // printPark function () {};
}

const kia = new Car(150);
kia.stop();