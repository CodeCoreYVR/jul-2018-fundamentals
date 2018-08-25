$(document).ready(() => {

  // we are defining our Firebase configuration
  var config = {
    // Production Project
    apiKey: "AIzaSyBINWL3rrCPftkUg5Ld4pr8NX3r7ACSHa0",
    authDomain: "messaging-board-d5398.firebaseapp.com",
    databaseURL: "https://messaging-board-d5398.firebaseio.com",
    projectId: "messaging-board-d5398",
    storageBucket: "messaging-board-d5398.appspot.com",
    messagingSenderId: "206009436699"
  };
  // define vars to use
  const form = $('#messaging-board-form');
  const messageBoard = $('#message-board')
  const messageInput = $('#message');
  const addMessageToBoard = (messageValue) => {
    console.log('adding a new document to the messaging board');
    messageBoard.append(`<div>${messageValue}</div>`);
  };
  const saveMessage = (messageToSave) => {
    // this is the data i am going to  save
    const dataToBeSaved = {
      message: messageToSave
    }

    // callback gets called after data
    // has been attempted to be saved
    const callback = (err) => {
      if(err) {
        console.log('CRAP!!!', err);
      } else {
        console.log('SWEET!!!');
      }
    }

    // saves into firebase
    // this will make the firbase program to trigger a series of events
    firebase.database().ref().child('messages').push(dataToBeSaved, callback);
  }

  // initializing our firebase
  firebase.initializeApp(config);

  // Load our messages into the message board
  firebase.database().ref('/messages').on('child_added', function(data) {
    const messageData = data.val();
    addMessageToBoard(messageData.message)
  });

  form.on('submit', function(e) {
    e.preventDefault();

    // prevent the form from submitting
    // get the message
    // send the message somewhere (to the recipient) (out of scope for review)
    // display the message

    const messageValue = messageInput.val();
    // addMessageToBoard(messageValue);
    saveMessage(messageValue);

  });
});