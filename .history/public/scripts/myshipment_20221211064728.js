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






var uid = localStorage.getItem('uid');

//THÊM SỬA THÔNG TIN USER
var Ufullname = document.getElementById('name_user');
var Uaddress = document.getElementById('add_user');
var Uphone = document.getElementById('phone_user');

var nameChecked = '';
var addChecked = '';
var phoneChecked = '';

function fetchData(uid){
    get(child(dbref, `UserList/${uid}`))
    .then((snapshot)=>{
        if(uid==''){
            
            Toastify({
                text: "Bạn chưa đăng nhập, ấn vào thông báo này để đăng nhập",
                duration: 10000,
                destination: "login.html",
                newWindow: false,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: false, // Prevents dismissing of toast on hover
                style: {
                    margin: "60px 10px 0 0",
                    padding: "30px 40px 40px 40px",
                    height: "100px",
                    width: "400px",
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
            }).showToast();
        }
        else{
            
            // const test = snapshot.val().fullname
            // console.log(test)
            document.getElementById('Userfullname').innerText = snapshot.val().fullname;
            document.getElementById('Useraddress').innerText = snapshot.val().address;
            document.getElementById('Userphone').innerText = snapshot.val().phone;
            
        }
        
    })
    .catch((error)=>{
        alert("LỖI" + error);
    });
}

fetchData(uid)

//CHỈNH SỬA THÔNG TIN USER

function updateData(uid){
    //Nếu giá trị ở ô input trống thì sẽ lấy giá trị trước đó của biến muốn thay đổi
    //chứ không set khoảng trắng vào database
    if(Ufullname.value == 'undefined'){
        nameChecked = document.getElementById('Userfullname').innerText;
    } else {
        nameChecked = Ufullname.value;
    };

    if(Uaddress.value == ''){
        addChecked = document.getElementById('Useraddress').innerText;
    } else {
        addChecked = Uaddress.value;
    };

    if(Uphone.value == ''){
        phoneChecked = document.getElementById('Userphone').innerText;
    } else {
        phoneChecked = Uphone.value;
    };
    

    update(ref(db, "UserList/"+uid+"/"),{
        address: addChecked,
        fullname: nameChecked,
        phone: phoneChecked
    })
    .then(() =>{
        location.reload();
        Toastify({
            text: "Thêm thông tin thành công",
            duration: 3500,
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
    })
    .catch((error)=>{
        alert("Không thành công, lỗi " + error);
    });
}

//GÁN SỰ KIỆN VÀO CÁC NÚT
    //LOGIN
document.getElementById('loginbtn').addEventListener('click', () => {
    window.location='login.html'
})

    //SIGNUP
document.getElementById('signupbtn').addEventListener('click', () => {
    window.location='signin.html'
})

    //UPDATE USERINFO
document.getElementById('Isnbtn').addEventListener('click', () => {
    updateData(uid)
})
//ẨN NÚT LOGOUT KHI CHƯA ĐĂNG NHẬP
if(uid == '') {
    document.getElementById('logoutbtn').style.display = 'none';
}


var noship = localStorage.getItem('noship')

document.getElementById('noship').innerText = noship + 'đ';

noship = Number(noship + 10000)
