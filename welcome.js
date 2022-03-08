
  let userEmail = localStorage.getItem('userEmail');
  let userEmailSpan = document.getElementById('userEmailSpan');
  console.log(userEmailSpan);
  userEmailSpan.innerHTML =userEmail;


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
    let descriptionField = document.getElementById('description').value;
    


})    



