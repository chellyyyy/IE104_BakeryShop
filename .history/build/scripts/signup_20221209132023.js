
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxJL0u9BhRNpcj1cDcV-bqgEhjj1a2oeQ",
    authDomain: "my-1-350217.firebaseapp.com",
    databaseURL: "https://my-1-350217-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-1-350217",
    storageBucket: "my-1-350217.appspot.com",
    messagingSenderId: "222822732012",
    appId: "1:222822732012:web:bd7112952f393a52c615c9",
    measurementId: "G-PNLR58DSE1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

//SIGNUP----------------------------
document.getElementById('signup').addEventListener('click',() => {
    var _email = document.getElementById('email').value;
    var _password = document.getElementById('password').value;
    var _username = document.getElementById('username').value;

    // if(ValidateEmail()==false){
    //     return;
    // }

    // if(spaceValidation()==false){
    //     return;
    // }
    createUserWithEmailAndPassword(auth, _email, _password)
        .then((userCredential) => {
            // Signed in 
        const user = userCredential.user;
        
            set(ref(db, 'UserList/' + user.uid), {
                username: _username,
                email: _email
            })
        

            alert('done');
            window.location='login.html';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert('errorMassage');
            console.log(errorMessage);
            // console.log(errorMessage)
            // ..
        });

});