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

document.getElementById('test').addEventListener('click', () => {
    alert('1')
});

var id = document.getElementById("id_pro");
var name = document.getElementById("name_pro");
var price = document.getElementById("price_pro");
var pic = document.getElementById("pic_pro");
var desc = document.getElementById("desc_pro");

// var insBtn = document.getElementById("Insbtn"); 

function InsertData(){
  set(ref(db, "TheCakes/"+ id.value),{
      NameOfCake: name.value,
      PriceOfCake: price.value,
      PicOfCake: pic.value,
      Descript: desc.value
  })
  .then(() =>{
      alert("Thành công!");
      name.value = "";
      price.value = "";
      pic.value = "";
      desc.value = "";
  })
  .catch((error)=>{
      alert("Không thành công, lỗi " + error);
  });
  }

document.getElementById('test').addEventListener(InsertData)