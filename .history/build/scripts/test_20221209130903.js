
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
const db = getDatabase();
const auth = getAuth();

const data = 
//SIGNUP----------------------------
document.getElementById('signup').addEventListener('click',() => {
    set(ref(db, 'UserList/' + user.uid), {
        username: _username,
        email: _email
    })

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
            if(_email != ''){
                
            }
            
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