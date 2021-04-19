
 
 var firebaseConfig = {
    apiKey: "AIzaSyCk0xqlBhTfjig6ZZn8ImN07BXqdkkVtCk",
    authDomain: "kwitter-project-5c6ab.firebaseapp.com",
    databaseURL: "https://kwitter-project-5c6ab-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-5c6ab",
    storageBucket: "kwitter-project-5c6ab.appspot.com",
    messagingSenderId: "692986137086",
    appId: "1:692986137086:web:f64a61457637d8af62d8af"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}