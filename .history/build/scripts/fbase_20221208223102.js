// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_g23L-wg8ve1sVjkFYV106u0Z6rs8MHY",
  authDomain: "ie104-760b6.firebaseapp.com",
  databaseURL: "https://ie104-760b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ie104-760b6",
  storageBucket: "ie104-760b6.appspot.com",
  messagingSenderId: "954364631488",
  appId: "1:954364631488:web:c08eb53cbb2ae44aafd025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth();


function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function spaceValidation(){
    if(isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(pass.value)){
        alert('ko dc de trong');
        return false;
    }
}

//EMAIL VALIDATION
function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
    
}


//SIGNUP----------------------------
document.getElementById('signup').addEventListener('click',() => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;


    if(ValidateEmail()==false){
        return;
    }
    if(spaceValidation()==false){
        return;
    }
    if(VA)
    
    
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(database, 'UserList/' + user.uid),{
                username: username,
                email: email
            })
            alert('done');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert('errorMassage');
            // ..
        });

});

//LOGIN--------------------------------
// document.getElementById('login').addEventListener('click',() => {
//     var email = document.getElementById('lemail').value;
//     var password = document.getElementById('lpassword').value;


//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;

//             const dt = new Date();
//             update(ref(database, 'UserList/' + user.uid),{
//                 last_login: dt,
//             })
//                 alert('Logged in');
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;

//             // alert('errorMassage');
//             console.log(errorMessage)


//         });
// });