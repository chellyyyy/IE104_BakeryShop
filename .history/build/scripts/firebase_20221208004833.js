// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
// const db = getDatabase();
const auth = getAuth(app);

document.getElementById('signup').addEventListener('click' , function(){
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('done')
    // ..
  });
})

// signUp.addEventListener('click',(e) => {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var username = document.getElementById('username').value;

Refrences
const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const submit = document.getElementById('submit')
// Validation----

function Validation(){
    let usernameregex = /^[a-zA-z]+$/;
    // let email = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    let userregex = /^[a-zA-z0-9]{5,}$/;

    if(!usernameregex.test(username.value)){
        alert('t??n sai')
        return false;
    }
    if(!email.test(email.value)){
        alert('email sai')
        return false;
    }
    return true;
}



//Register User
// function RegisterUser(){
//     if(!Validation()){
//         return;
//     };
//     const dbRef = ref(db);

//     get(child(dbRef, 'UsersList/'+ username.value)).then((snapshot)=>{
//         if(snapshot.exists()){
//             alert('T??i kho???n ???? t???n t???i');
//         }

//         else{
//             set(ref(db, 'UsersList/'+username.value),
//             {
//                 email: email.value,
//                 username: username.value,
//                 password: pass.value
//             })
//             then(()=>{
//                 alert('????ng k?? th??nh c??ng');
//             })
//             .catch((error)=>{
//                 alert('error'+error);
//             })
//         }
//     });
// }






//Assign Events

// submit.addEventListener('click', RegisterUser);







