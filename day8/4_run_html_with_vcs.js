$(document).ready(function() {
  /**
   * 
   * Prevent the form from submitting if password is not valid
   * display a message if the password is
     under 5 characters long.
  TODO:
   * clear the form when the user clicks on the "Clear form"
     link.
   * hide error message when user click on the "Clear form"
     link.
   * make sure that the password is not longer than 12 characters
  */

  // this reacts when the user trigger an event
  // $('#my-first-form').on( events, handler )

  // $( {facebook} ).on( {friend request}, {action} );

  $('#my-first-form').on( 'submit', function(ev) {

    // display a message if the password is
    // under 5 characters long.
    const password_element = $('#password');
    const password_value = password_element.val();
    const password_length = password_value.length;
    const is_password_valid = password_length >= 5;
    if ( ! is_password_valid ) {
      // this is going to prevent the form frrom submitting
      ev.preventDefault();
      $('#weak_password').slideDown();
    }
  });

  // this is going to get executed when user
  // clicks the element with the id #clear-fields
  // $('#clear-fields').on('click', function(ev){
  //   alert('link has been clicked');
  // });

  // this is going to get executed when the cursor
  // is over the element with id #clear-fields
  // $('#clear-fields').on('mouseover', function(ev){
  //   alert('mouse was over link');
  // });
  
});