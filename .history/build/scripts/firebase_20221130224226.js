  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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

  import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

  const db = getDatabase();
// ref
  var namebox = document.getElementById("NameBox");
  var rollbox = document.getElementById("NameBox");
  var secbox = document.getElementById("NameBox");
  var genbox = document.getElementById("NameBox");

  var insBtn = document.getElementById("Insbtn");
  var selBtn = document.getElementById("Selbtn");
  var updBtn = document.getElementById("Updbtn");
  var delBtn = document.getElementById("Delbtn");
// insert data
function InsertData()