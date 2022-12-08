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



// document.getElementById('loginpage').style.display = 'none';
// document.getElementById('logincart').style.display = 'none';
// document.getElementById('loginsearch').style.display = 'none';


// document.getElementById('navmid').style.position = 'absolute';
// document.getElementById('navmid').style.left = '28%';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
const dbref = ref(db);


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

// localStorage.setItem("lastname", "Smith");
if(uid != ''){
    const uid= localStorage.getItem("uid");
    fetchData(uid)
}
