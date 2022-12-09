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
document.getElementById('paginated-list').innerHTML = `
<li class="item">
    <div class="img"><img src="data:image/jpeg;base64,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" alt="">
        <div class="icon"><span>B&aacute;n h&#x1EBF;t</span><i class="fa-solid fa-circle-check"></i></div>
    </div>
    <div class="title-price" style="display: flex; justify-content: space-between; align-items: center">
        <p class="title" style="font-weight: 600; width: 50%;">Danish Pastry</p>
        <p class="price" style="font-weight: 700; font-size:20px">100.000&dstrok;</p>
    </div>
</li>
`;