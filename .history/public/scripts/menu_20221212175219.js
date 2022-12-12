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



//## LẤY DATA SẢN PHẨM TỪ DATABASE VÀ THÊM VÀO MENU
const uid = localStorage.getItem('uid');
var cakeID = '';
var cakeName = '';
var detected = 0;
var proNumber = '';
var inputID = ''; //ID của thẻ input lấy số lượng bánh
var change; //Số lượng bánh sẽ thêm vào giỏ hàng
var change2; //Số lượng bánh sẽ thêm vào giỏ hàng
var change3; //Số lượng bánh sẽ thêm vào giỏ hàng
var linkID = '';
var link = '';
var priceID = '';
var price= '';
var localCount = '';
var updateChange;


get(child(dbref, `UserList/${uid}/Total`))
.then((snapshot)=>{
  var cartSum = []
  snapshot.forEach(childSnapshot => {
    cartSum.push(childSnapshot.val());
  })
  cartSum.forEach((e)=>{
    document.getElementById('counter').innerText = e
    change3 = Number(e)
    console.log(typeof(change3))
  })
})














get(child(dbref, `TheCakes/`))
.then((snapshot)=>{
    var cakeData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        cakeData.push(childSnapshot.val());
    });

    cakeData.forEach((e)=>{
      document.getElementById('paginated-list').innerHTML += 
      `
      <li class="item"><a id="Cake${e.ID}" href="#more_info-${e.ID}">
        <div class="img"><img id="URL${e.ID}"src="${e.PicOfCake}" alt="${e.NameOfCake}"></div>
        <div class="title-price">
          <p class="title">${e.NameOfCake}</p>
          <p class="price" id="price${e.ID}">${e.PriceOfCake}.000&dstrok;</p>
        </div>
        <div class="overlay" id="more_info-${e.ID}">
          <div class="popup_content"><a class="close" href="#">&times;</a>
            <div class="product-all">
              <div class="product-1"><img src="${e.PicOfCake}" alt="${e.NameOfCake}"></div>
              <div class="product-2">
                <div class="Information">
                  <h1>${e.NameOfCake}</h1>
                  <p class = "des">${e.Descript}</p>
                  <p class="price" style = "font-weight: 700;">${e.PriceOfCake}.000&dstrok;</p>
                </div>
                <div class="Button">
                  <input class="incrbtn button-1" id="Input${e.ID}" type="number" min="1" value="1">
                  <button id="${e.ID}" class="button-2"><i class="fa-solid fa-cart-shopping"></i><span>Thêm vào giỏ hàng</span></button>
                </div>
              </div>
            </div>
          </div>
        </div></a>
      </li>
      `         
    })
    // TĂNG CON SỐ NHỎ TRÊN BIỂU TƯỢNG GIỎ HÀNG KHI THÊM SẢN PHẨM
    document.querySelectorAll('.button-2').forEach(e => {
      e.addEventListener('click' , ()=> {

          


          
          
          // localCount = Number(document.getElementById('counter').innerText);
          detected = e.id
          inputID = 'Input' + e.id
          change = Number(document.getElementById(inputID).value)

          linkID = 'URL' + e.id
          link = document.getElementById(linkID).src;

          priceID = 'price' + e.id
          price = document.getElementById(priceID).innerText;



                  

          // localCount = Number(localCount + change)
          // localStorage.setItem('cart', localCount);
          // proNumber = localStorage.getItem('cart');
          // alert(proNumber)
          // document.getElementById('counter').innerText = localStorage.getItem('cart'); //số nhỏ thay đổi

          cakeID = 'Cake' + e.id;


          //Lấy số lượng của bánh đã chọn trên db (bánh nằm trong giỏ hàng của user)
          var base
          
          get(child(dbref, `UserList/${uid}/Cart/${cakeID}`))
          .then((snapshot)=>{
            var cartBase = []
            snapshot.forEach(childSnapshot => {
              cartBase.push(childSnapshot.val());
            })
            base = Object.values(cartBase) //số bánh trong giỏ hàng hiện tại cũa loại đó (VD: bánh A: 5 cái)
            console.log(typeof(base))
            // return base
            // console.log(typeof(base))
            
          }) 

          // get(child(dbref, `UserList/${uid}/Cart/${cakeID}`))
          // .then((snapshot)=>{
          //   var cartBase = []
          //   snapshot.forEach(childSnapshot => {
          //     cartBase.push(childSnapshot.val());
          //   })
          //   cartBase.forEach((e)=>{
          //     // alert(e)
          //     console.log(e.Name)
          //   })
          // })
          // alert(cakeID)
          cakeName = document.getElementById(cakeID).innerText;
          console.log(cakeName)


          change2 = Number(change3 + change)
          
          updateChange = Number(change)
          console.log(base)
          // console.log(updateChange)
          set(ref(db, "UserList/"+ uid + "/" + "Cart/"+ cakeID),{
            Name: cakeName,
            Amout: updateChange,
            Url:link,
            Price:price
          })
          set(ref(db, "UserList/"+ uid + "/" + "Total"),{
            Sum: change2
          })
          
           

          get(child(dbref, `UserList/${uid}/Total`))
          .then((snapshot)=>{
            var cartSum = []
            snapshot.forEach(childSnapshot => {
              cartSum.push(childSnapshot.val());
            })
            cartSum.forEach((e)=>{
              document.getElementById('counter').innerText = e //Số nhỏ trên cart
              change3 = Number(e)
              // console.log(change3)
            })
          })          
          // location.reload();


          
      })

    
  })
    
})
.catch(()=>{
  alert(error);
});







document.getElementById('logoutbtn').addEventListener('click', () => {
  localStorage.setItem('cart', '')
})





