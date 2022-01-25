
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("user_div").style.display = "initial";

      document.getElementById("login_div").style.display = "block";
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      //document.getElementById("user_div").style.display = "none";
      document.getElementById("user_div").style.display = "none";

      document.getElementById("login_div").style.display = "initial";
      // ...
    }
  });


  function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;
    

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .then((userCredential) => {
    // Signed in
    var user = userCredential;
    localStorage.setItem('userEmail', userEmail);
    window.location = "http://127.0.0.1:5500/welcome.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //window.alert("Error : " + errorMessage);
   // document.write("Error : " + errorMessage);
    document.getElementById("error_msg").innerHTML = "Error : " +errorMessage;

  });
  }

