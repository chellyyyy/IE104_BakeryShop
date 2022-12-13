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
var priceStr = '';
var priceNum = '';
var priceSum = '';
var search = 0;
var ID = 0;
var replaceID

//FETCH CART DATA
get(child(dbref, `UserList/${uid}/Cart`))
.then((snapshot)=>{
    var cakeData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        cakeData.push(childSnapshot.val());
    });
    if(cakeData == ''){
      document.getElementById('rightpanel').style.display = 'none';
    } else {
      document.getElementById('empty').style.display = 'none';
    }
    

    cakeData.forEach((e)=>{
      search += 1
      document.getElementById('containerCart').innerHTML += 
      `
        <li class="main-product">
        <div class="img-product"><img src="${e.Url}"></div>
        <div class="content-product">
            <p><b>${e.Name}</b></p>
            <p>Số lượng:&nbsp;<span id="amout${search}">${e.Amout}</span></p>
        </div>
        
        <div class="tien">
            <div><span class="money">${e.Price}</span></div>
            <div>
              <h6 class="btn" id="delbtn${search}">
                <a>Xóa<i class="fas fa-trash-can"></i></a>
              </h6>
            </div>
        </div>
        </li>
      `
      priceStr = e.Price
      priceNum = Number(priceStr.replace('đ', '').replace('.',''))
      
      priceSum = Number(priceSum + priceNum*e.Amout)
      
      
    })
    
    document.querySelectorAll('.btn').forEach(e => {
      
      e.addEventListener('click', ()=>{
        ID = e.id
        ID = ID.replace('delbtn','')
        
        replaceID = `amout${ID}`
        console.log(replaceID)
        document.getElementById(replaceID).innerText -= 1;
      })
    })




    localStorage.setItem('noship', priceSum);
    
    document.getElementById('noship').innerText = priceSum + 'đ';
    priceSum = Number(priceSum + 10000)
    document.getElementById('withship').innerText = priceSum + 'đ';
    console.log(priceSum)
    localStorage.setItem('Total', priceSum)

})
.catch(()=>{
  console.log('')
});
