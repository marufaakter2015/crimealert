var firebaseConfig = {
    apiKey: "AIzaSyAq9Oul7spdjS4e9GlDLKmxqhrZeL-xgM8",
    authDomain: "arboreal-parser-336914.firebaseapp.com",
    projectId: "arboreal-parser-336914",
    storageBucket: "arboreal-parser-336914.appspot.com",
    messagingSenderId: "176457315703",
    appId: "1:176457315703:web:d9107ccdfc7e897845dd72",
    measurementId: "G-6Y6D2FH15Z"
};

//initializr firebase
firebase.initializeApp(firebaseConfig);


//get submit form
let submitButton = document.getElementById("submit");

//create event listener to allow form submission
submitButton.addEventListener("click", (e) => {
    //prevent default form submission behavior
    e.preventDefault();

    //get form values
    let nameField = document.getElementById('name').value;
    let emailField = document.getElementById('email').value;
    let passwordField = document.getElementById('password').value;
    let passwordVerifyField = document.getElementById('passwordVerify').value;

console.log(passwordField,passwordVerifyField);
    let message = document.getElementById("message");
    if(passwordField.length != 0){
      if(passwordField == passwordVerifyField){
        firebase.auth().createUserWithEmailAndPassword(emailField, passwordField)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user);
       
    window.location = "http://127.0.0.1:5500/login.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        document.getElementById("user_message").innerHTML = "Error : " +errorMessage;
        });
        }
        else{
            message.textContent = "Password don`t match";
            message.style.color = "#ff4d4d";
    
        }
    }
    else{
        message.textContent = "Password can`t be empty!"
    }

})    

