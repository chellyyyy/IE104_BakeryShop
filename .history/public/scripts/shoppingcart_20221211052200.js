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

const uid = localStorage.getItem('uid')
//FETCH CART DATA
get(child(dbref, `UserList/${uid}/Cart`))
.then((snapshot)=>{
    var cakeData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        cakeData.push(childSnapshot.val());
    });

    cakeData.forEach((e)=>{
      document.getElementById('product').innerHTML += 
      `
      <li class="main-product">
      <div class="img-product"><img src="assets/Danish_Pastry.png"></div>
      <div class="content-product">
        <p><b>Danish Pastry</b></p>
        <p><i class="fas fa-calendar-days"></i>04/11/2022</p>
        <p><i class="fas fa-clock"></i>10 AM</p>
        <p><i class="fas fa-file-pen"></i>Ghi chú</p>
      </div>
      <div class="buttons_added">
        <button class="minus is-form" onclick="decrement()">-</button>
        <input class="input-qty" id="demoInput" aria-label="quantity" max="10" min="1" name="" type="number" value="1">
        <button class="plus is-form" onclick="increment()">+</button>
      </div>
      <div class="tien">
        <div><span class="money">100.000&dstrok;</span></div>
        <div>
          <h6>X&oacute;a<i class="fas fa-trash-can"></i></h6>
        </div>
      </div>
    </li>
      `         
    })
    document.querySelectorAll('.detect').forEach(e => {
        e.addEventListener('click' , ()=> {
            detected = e.id
        }) 
    })
})
.catch(()=>{
  alert("LỖI" + error);
});