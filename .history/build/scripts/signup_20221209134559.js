
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
const db = getDatabase(app);
const auth = getAuth(app);
const dbref = ref(db);

//VALIDATION
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function spaceValidation(){
    if(isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(password.value)){
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
    var _email = document.getElementById('email').value;
    var _password = document.getElementById('password').value;
    var _username = document.getElementById('username').value;

    if(ValidateEmail()==false){
        return;
    }

    if(spaceValidation()==false){
        return;
    }
    createUserWithEmailAndPassword(auth, _email, _password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            set(ref(db, 'UserList/' + user.uid), {
                username: _username,
                email: _email
            })
        
            alert('done');
            Toastify({
                text: "????ng nh???p th??nh c??ng",
                duration: 2500,
                // destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: false, // Prevents dismissing of toast on hover
                style: {
                    margin: "20px 10px 0 0",
                    padding: "40px 60px 40px 40px",
                    height: "100px",
                    width: "400px",
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
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