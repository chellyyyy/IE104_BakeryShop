// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
require('dotenv').config({ path: `${__dirname}/../../config.env` })
require('dotenv').config(/../../config.env` })
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "ie104-760b6.firebaseapp.com",
  databaseURL: "https://ie104-760b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ie104-760b6",
  storageBucket: "ie104-760b6.appspot.com",
  messagingSenderId: "954364631488",
  appId: "1:954364631488:web:c08eb53cbb2ae44aafd025"
};



document.getElementById('loginpage').style.display = 'none';
document.getElementById('logincart').style.display = 'none';
document.getElementById('loginsearch').style.display = 'none';


// document.getElementById('navmid').style.position = 'absolute';
// document.getElementById('navmid').style.left = '28%';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth();
const dbref = ref(database);

//Ẩn mục thông tin user


//EMAIL VALIDATION
function ValidateEmail() {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(lemail.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

//LẤY THÔNG TIN CỦA USER TỪ DATABASE
function fetchData(uid){
    get(child(dbref, `UserList/${uid}`))
    .then((snapshot)=>{
          document.getElementById('username').innerText = snapshot.val().username;
        //   document.getElementById('ACCOUNT--name').innerText  = snapshot.val()._name;
        //   document.getElementById('overview--name').innerText  = snapshot.val()._name;
        //   document.getElementById('overview--email').innerText = snapshot.val()._email;
        //   document.getElementById('overview--phone').innerText = snapshot.val()._phone;
    })
    .catch((error)=>{
        alert("LỖI" + error);
    });
}

//LOGIN--------------------------------
localStorage.setItem("uid", '');

document.getElementById('login').addEventListener('click',() => {
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpassword').value;

    if(ValidateEmail()==false){
        return;
    }
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            // const dt = new Date();
            // update(ref(db, 'UserList/' + user.uid),{
            //     last_login: dt,
            // })
                // alert('Logged in');

            // alert(user.uid);
            

            localStorage.setItem("uid", user.uid);
            localStorage.setItem("count", '1');
            
            window.location='homepage.html';
                // fetchData(user.uid);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // alert('errorMassage');
            console.log(errorMessage)



        });
});