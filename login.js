// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });

  //  function login(){
  //    var useremail = document.getelementbyid("email_field").value;
  //   var userpassword = document.getelementbyid("password_field").value;

  // }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("user_div").style.display = "block";

     // document.getElementById("login_div").style.display = "none";
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      //document.getElementById("user_div").style.display = "none";
      //document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";
//document.getElementById("user_div").style.display = "none";

      document.getElementById("login_div").style.display = "block";
      // ...
    }
  });


  function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;
    

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);

  });
  }
  

// const wrapper = document.querySelector('.wrapper'),
// form = wrapper.querySelectorAll('.form'),
// submitInput = form[0].querySelector('input[type = "submit"');
// function getDataForm(e){
//     e.preventDefault();
//     var formData = new FormData(form[0]);
//     console.log(formData.get('nameField') + '-' + formData.get('emailField') + '-' + formData.get('passwordField'));
// }

// document.addEventListener('DOMContentLoaded', function(){
//     submitInput.addEventListener('click', getDataForm, false);
// },false);

