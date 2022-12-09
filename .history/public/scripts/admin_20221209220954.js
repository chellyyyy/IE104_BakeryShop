// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ApiKey.api,
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

//LOGOUT
document.getElementById('adminLogout').addEventListener('click', ()=> {
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

// ADD INFORMATION USER
//## LẤY DATA NGƯỜI DÙNG TỪ DATABASE VÀ THÊM VÀO ADMIN
get(child(dbref, `UserList/`))
.then((snapshot)=>{
    var userData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        userData.push(childSnapshot.val());
    });

    userData.forEach((e)=>{
      document.getElementById('account').innerHTML += 
      `
      <tr>
        <td>
          <p>${e.username}</p>
        </td>
        <td>${e.email}</td>
        <td><i class="bx bx-dots-vertical-rounded"></i></td>
      </tr>
      `         
    })
})
.catch(()=>{
  alert("LỖI" + error);
});


//## LẤY DATA SẢN PHẨM TỪ DATABASE VÀ THÊM VÀO Admin
get(child(dbref, `TheCakes/`))
.then((snapshot)=>{
    var cakeData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        cakeData.push(childSnapshot.val());
    });

    cakeData.forEach((e)=>{
      document.getElementById('product').innerHTML += 
      `
      <li class="completed">
        <p>${e.NameOfCake}</p><i class="bx bx-dots-vertical-rounded"></i>
      </li>
      `         
    })
})
.catch(()=>{
  alert("LỖI" + error);
});