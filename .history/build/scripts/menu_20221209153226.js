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

//THÊM SẢN PHẨM VÀO MENU
let menu = document.getElementById('paginated-list').innerHTML;
document.getElementById('paginated-list').innerHTML = '<h1'

// document.getElementById('paginated-list').innerHTML = `
//           <li class="item">
//             <div class="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN78oxZDqNEPkT2O1EF57n6WCqEjpv3vQaeA_fVH8&amp;s" alt="">
//               <div class="icon"><span>B&aacute;n h&#x1EBF;t</span><i class="fa-solid fa-circle-check"></i></div>
//             </div>
//             <div class="title-price" style="display: flex; justify-content: space-between; align-items: center">
//               <p class="title" style="font-weight: 600; width: 50%;">Danish Pastry</p>
//               <p class="price" style="font-weight: 700; font-size:20px">100.000&dstrok;</p>
//             </div>
//           </li>
// `;