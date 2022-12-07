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

// REF
const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const submit = document.getElementById('signup');

//VAR

function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}

function Validation(){
  if(isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(pass.value)){
    alert('ko dc de trong');
    return false;
  }





  // let nameregex = /[a-zA-Z0-9]+/;
  // let email = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
  // let userregex = /^[a-zA-Z0-9]{5,}$/;

  // if(!email.test(email.value)){
  //   alert('Invalid Email');
  //   return false;
  // }

  // if(!userregex.test(username)){
  //   alert('Invalid Username');
  //   return false;
  // }

  return true;
}

//SIGNUP

function RegisterUser(){
  if(!Validation()){
    return;
  }
  const dbRef = ref(db);
  const auth = getAuth(app);
  get(child(dbRef, 'UserList/'+ username.value)).then((snapshot)=>{
    if(snapshot.exists()){
      alert('Account already exists');
    }
    else{
      set(ref(db, 'UserList/'+ username.value),
      {
        email: email.value,
        username: username.value,
        password: encPass()
      })
      .then(()=>{
        alert('Added Success');
      })
      .catch((error)=>{
        alert('error'+error);
      })
    }

    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    // var username = document.getElementById('username').value;

     
  });

}

//AUTHEN
function AuthenUser(){
  const dbref = ref(db);

  get(child(dbRef, 'UserList/'+ username.value)).then((snapshot)=>{
    if(snapshot.exists()){
      let dbpass = decPass(snapshot.val().password);
      if(dbpass == pass.value){
        login();
      }

      else{
        alert('user does not exist');
      }
    }
    else{
      alert('user or password invalid');
    }
  });

}

//ENCRYP
function encPass(){
  var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
  return pass12.toString();
}

//DECRIPTION
function decPass(dbpass){
  var pass12 = CryptoJS.AES.decrypt(dbpass, pass.value);
  return pass12.toString(CryptoJS.enc.Utf8);
}

//LOGIN


function login(user){
  let keepLoggedIn = document.getElementById('checkbox').checked;

  if(!keepLoggedIn){
    sessionStorage.setItem('user',JSON.stringify(user));
    window.location='homepage.html';
  }
  else{
    localStorage.setItem('keepLoggedIn', 'yes');
    localStorage.setItem('user',JSON.stringify(user));
    window.location='home.html';
  }

}

//HOMEPAGE
var currentUser = null;

function getUsername(){
  let keepLoggedIn = localStorage.getItem('keepLoggedIn')
}
//
submit.addEventListener('click', RegisterUser);











