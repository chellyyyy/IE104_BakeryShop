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
const dbref = ref(db);




//LẤY THÔNG TIN CỦA USER TỪ DATABASE
function fetchData(uid){
    get(child(dbref, `UserList/${uid}`))
    .then((snapshot)=>{
        if(uid==''){
            document.getElementById('Username').innerText = 'Xin chào';
        // document.getElementById('Username').innerText = uid;
            document.getElementById('loginbtn').style.display = 'flex';
            document.getElementById('signupbtn').style.display = 'flex';
            document.getElementById('logoutbtn').style.display = 'none';
            document.getElementById('userinfo').style.display = 'none';
        }
        else{
            document.getElementById('Username').innerText = snapshot.val().username;
            document.getElementById('loginbtn').style.display = 'none';
            document.getElementById('signupbtn').style.display = 'none';
        }
    })
    .catch((error)=>{
        alert("LỖI" + error);
    });
}

//LOGOUT
document.getElementById('logoutbtn').addEventListener('click', ()=> {
    signOut(auth).then(() => {
        // Sign-out successful.
        // localStorage.setItem('uid','');
        
        
        window.location='login.html';
        
        // trả về toast nêu đăng xuất thành công
        
      }).catch((error) => {
        
        // An error happened.
        // window.alert(error);
    });
})

//GÁN SỰ KIỆN VÀO CÁC NÚT
document.getElementById('loginbtn').addEventListener('click', () => {
    window.location='login.html'
})

document.getElementById('signupbtn').addEventListener('click', () => {
    window.location='signin.html'
})

//HIỆN THÔNG TIN CỦA USER KHI ĐÃ ĐĂNG NHẬP
const uid = localStorage.getItem('uid')
const cart =
fetchData(uid)