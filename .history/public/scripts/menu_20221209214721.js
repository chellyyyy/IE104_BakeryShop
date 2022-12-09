// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { ApiKey } from "./config.js";
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



//## LẤY DATA SẢN PHẨM TỪ DATABASE VÀ THÊM VÀO MENU
get(child(dbref, `TheCakes/`))
.then((snapshot)=>{
    var cakeData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        cakeData.push(childSnapshot.val());
    });

    cakeData.forEach((e)=>{
      document.getElementById('paginated-list').innerHTML += 
      `
      <li class="item">
        <div class="img"><img src="${e.PicOfCake}" alt="${e.NameOfCake}"></div>
        <div class="title-price" style="display: flex; justify-content: space-between; align-items: center">
          <p class="title" style="font-weight: 600; width: 50%;">${e.NameOfCake}</p>
          <p class="price" style="font-weight: 700; font-size:20px">${e.PriceOfCake}.000đ</p>
        </div>
      </li>
      `         
    })
})
.catch(()=>{
  alert("LỖI" + error);
});