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
        document.getElementById('Username').innerText = snapshot.val().username;
        document.getElementById('loginbtn').style.display = 'none';
        document.getElementById('signupbtn').style.display = 'none';
        //   document.getElementById('ACCOUNT--name').innerText  = snapshot.val()._name;
        //   document.getElementById('overview--name').innerText  = snapshot.val()._name;
        //   document.getElementById('overview--email').innerText = snapshot.val()._email;
        //   document.getElementById('overview--phone').innerText = snapshot.val()._phone;
    })
    .catch((error)=>{
        alert("LỖI" + error);
    });
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var uid = localStorage.getItem('uid');
var count = localStorage.getItem('count');

// if(uid == ''){
    // document.getElementById('loginbtn').style.display = 'flex';
    // document.getElementById('signupbtn').style.display = 'flex';
    // document.getElementById('logoutbtn').style.display = 'none';
// }

if(count != ''){
    Toastify({
        text: "Đăng nhập thành công",
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
    sleep(500)
    // Reset lại biến count để khi back lại trang chủ mà không phải login thì không hiện toast
    localStorage.setItem('count', '');
}



// if(uid != ''){
// sleep(500)
//     uid= localStorage.getItem("uid");
fetchData(uid);
// }





//LOGOUT
document.getElementById('logoutbtn').addEventListener('click', ()=> {
    signOut(auth).then(() => {
        // Sign-out successful.
        
        window.location='login.html';
        
        // trả về toast nêu đăng xuất thành công
        
      }).catch((error) => {
        localStorage.setItem('uid','')
        document.getElementById('loginbtn').style.display = 'flex';
    document.getElementById('signupbtn').style.display = 'flex';
        // An error happened.
        // window.alert(error);
    });
})


//------------------------------
function clearData(){
    document.getElementById('default_address--name').innerText = "";
    document.getElementById('default_address--address').innerText = "";
    document.getElementById('default_address--phone').innerText = "";
    document.getElementById('address--list').innerText = "";
    document.getElementById('voucher--list').innerText = "";
    document.getElementById('history--list').innerText = "";
    document.getElementById('account--name').innerText  = "";
    document.getElementById('overview--name').innerText  = "";
    document.getElementById('overview--email').innerText = "";
    document.getElementById('overview--phone').innerText = "";
}