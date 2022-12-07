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

function Validation(){
  let nameregex = /[a-zA-Z0-9]+/;
  let email = /[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com/;
  let userregex = /[a-zA-Z0-9]{5,}/;

  if(!email.test(email.value)){
    alert('Invalid Email');
    return false;
  }

  if(!userregex.test(username)){
    alert('Invalid Username');
    return false;
  }

  return true;
}

//REG

function RegisterUser(){
  Validation()
  const dbRef = ref(db);

}











