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
const db = getDatabase(app);
var auth = getAuth(app);
const dbref = ref(db);
var cur;


//#ĐĂNG KÝ
document.getElementById('signUp').addEventListener('click', ()=>{
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmpasswd = document.getElementById('confirm_password').value;
  const name = document.getElementById('username').value;
  // const phone = document.getElementById('signup__phone').value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  console.log(email.match(pattern));
    // Kiểm tra email có đúng định dạng nhưng password và confirmpasswd không giống nhau
    if(email.match(pattern) && password != "" && password != confirmpasswd){
      // trả về toast thất bại
      alert('fail');
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // Gọi toast nếu email đã tồn tại
          alert('exists email');
          // ..
        })
    .then((userCredential) => {
      // Signed in
      // Gọi tham số popup = hàm toast success đã sử dụng làm tham số cho resolve khi điều kiện đúng 
      const user = userCredential.user;
      // TẠO BRANCH Ở DATABASE
        // set(ref(db, `${user.uid}/_overview`),{
        //     _email: email,
        //     _name: name,
        //     // _phone: phone,
        })
        .then(()=>{
          alert('hello');
          console.log("Tạo branch thành công");
        })
        .catch((error)=>{
          console.log("Tạo branch không thành công, Lỗi: " + error);
        });
      // XÓA GIÁ TRỊ EMAIL VÀ PASSWORD
      // email = "";
      // password = "";
    });
    
// Refrences---------------------------------------------------------
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const pass = document.getElementById('password');
// const submit = document.getElementById('signUp')




// Validation--------------------------------------------------------

// function Validation(){
//     let usernameregex = /^[a-zA-z]+$/;
//     let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
//     let userregex = /^[a-zA-z0-9]{5,}$/;

//     if(!usernameregex.test(username.value)){
//         alert('Tên sai')
//         return false;
//     }
//     if(!emailregex.test(email.value)){
//         alert('Email sai')
//         return false;
//     }
//     return true;
// }



//Register User-------------------------------------------------------
// function RegisterUser(){
//     if(!Validation()){
//         return;
//     };
//     const dbRef = ref(db);

//     get(child(dbRef, 'UsersList/'+ username.value)).then((snapshot)=>{
//         if(snapshot.exists()){
//             alert('Tài khoản đã tồn tại');
//         }

//         else{
//             set(ref(db, 'UsersList/'+username.value),
//             {
//                 email: email.value,
//                 username: username.value,
//                 password: pass.value
//             })
//             then(()=>{
//                 alert('Đăng kí thành công');
//             })
//             .catch((error)=>{
//                 alert('error'+error);
//             })
//         }
//     });
// }






//Assign Events

// submit.addEventListener('click', RegisterUser);













