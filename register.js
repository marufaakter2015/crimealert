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
// var firestore = firebase.firestore()

//variable to access database collection
// const db = firestore.collection("registrationFormData");

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

    //save form data to firebase
    // db.doc().set({
    //     name: nameField,
    //     email: emailField,
    //     password: passwordField,
    //     passwordVerify: passwordVerifyField
    // }).then( () =>{
    //     window.location = "http://127.0.0.1:5500/login.html";
    //     //document.getElementById("r_message").innerHTML = "Registration Complete";
    //    // console.log("Registration Complete")
    // }).catch((error) =>{
    //     console.log(error)
    // })

    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

})