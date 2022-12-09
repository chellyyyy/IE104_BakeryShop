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
// let menu = document.getElementById('paginated-list').innerHTML;


document.getElementById('paginated-list').innerHTML += `
          <li class="item">
            <div class="img"><img src="https://img.freepik.com/premium-vector/abstract-background-gradients-colorful-elegant-concept_222229-3381.jpg?w=2000" alt="">
              <div class="icon"><span>B&aacute;n h&#x1EBF;t</span><i class="fa-solid fa-circle-check"></i></div>
            </div>
            <div class="title-price" style="display: flex; justify-content: space-between; align-items: center">
              <p class="title" style="font-weight: 600; width: 50%;">Danish Pastry</p>
              <p class="price" style="font-weight: 700; font-size:20px">100.000&dstrok;</p>
            </div>
          </li>
`;





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
        
        //   document.getElementById('ACCOUNT--name').innerText  = snapshot.val()._name;
        //   document.getElementById('overview--name').innerText  = snapshot.val()._name;
        //   document.getElementById('overview--email').innerText = snapshot.val()._email;
        //   document.getElementById('overview--phone').innerText = snapshot.val()._phone;
    })
    .catch((error)=>{
        alert("LỖI" + error);
    });
}

//## FETCH DATA BRACNH HISTORY
get(child(dbref, `TheCakes/`))
.then((snapshot)=>{
    var cakeData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        cakeData.push(childSnapshot.val());
    });

    console.log(cakeData);



    cakeData.forEach((e)=>{
      document.getElementById('paginated-list').innerHTML += 
      `
    <li class="item">
      <div class="img"><img src="${cakeData.PicOfCake}" alt="">
        <div class="icon"><span>B&aacute;n h&#x1EBF;t</span><i class="fa-solid fa-circle-check"></i></div>
      </div>
      <div class="title-price" style="display: flex; justify-content: space-between; align-items: center">
        <p class="title" style="font-weight: 600; width: 50%;">Danish Pastry</p>
        <p class="price" style="font-weight: 700; font-size:20px">100.000&dstrok;</p>
      </div>
    </li>
      `         
    })
})
.catch(()=>{
  alert("LỖI" + error);
});