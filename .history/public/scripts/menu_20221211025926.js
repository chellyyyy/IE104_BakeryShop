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
var localCount = Number(document.getElementById('counter').innerText);
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
          <p class="title" style="font-weight: 600; width: 50%;"> <a id="Cake${e.ID}" href="#more_info-${e.ID}">${e.NameOfCake}</a></p>
          <p class="price" style="font-weight: 700; font-size:20px">${e.PriceOfCake}.000&dstrok;</p>
        </div>
        <div class="overlay" id="more_info-${e.ID}">
          <div class="popup_content"><a class="close" href="#">&times;</a>
            <div class="product-all">
              <div class="product-1"><img src="${e.PicOfCake}" alt="${e.NameOfCake}"></div>
              <div class="product-2">
                <div class="Information">
                  <h1>${e.NameOfCake}</h1>
                  <p>${e.Descript}</p>
                  <p>${e.PriceOfCake}.000&dstrok;</p>
                </div>
                <div class="Button">
                  <div class="button-1">
                    <button class="minus is-form" onclick="decrement()">-</button>
                    <input class="input-qty" id="demoInput" aria-label="quantity" max="99" min="1" name="" type="number" value="1">
                    <button class="plus is-form" onclick="increment()">+</button>
                  </div>
                  <button id="${e.ID}" class="button-2"><i class="fa-solid fa-cart-shopping"></i><span>Thêm vào giỏ hàng</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      `         
    })
    // TĂNG CON SỐ NHỎ TRÊN BIỂU TƯỢNG GIỎ HÀNG KHI THÊM SẢN PHẨM
    document.querySelectorAll('.button-2').forEach(e => {
      e.addEventListener('click' , ()=> {
          detected = e.id
          localCount = Number(localCount + 1)
          localStorage.setItem('cart', localCount);
          proNumber = localStorage.getItem('cart');
          document.getElementById('counter').innerText = proNumber;

          cakeID = 'Cake' + e.id;
          // alert(cakeID)
          cakeName = document.getElementById(cakeID).innerText;
          console.log(cakeName)

          set(ref(db, "UserList/"+ uid + "/" + "Cart/"),{
            TotalAmout: proNumber
          })
          set(ref(db, "UserList/"+ uid + "/" + "Cart/"+ cakeName + "/"),{
            Amout: singleNum
          })

          
      })

      document.querySelectorAll('.minus').forEach(r => {
        r.addEventListener('click' , ()=> {

          
          document.getElementById('demoInput').stepDown();
        })
      })
  })
    


})
.catch(()=>{
  alert("LỖI" + error);
});


//THÊM VÀO GIỎ HÀNG



var id = document.getElementById("id_pro");
var name = document.getElementById("name_pro");
var price = document.getElementById("price_pro");
var pic = document.getElementById("pic_pro");
var desc = document.getElementById("desc_pro");


// -Insert data-
function InsertData(){
    set(ref(db, "UserList/"+ uid + "/" + "Cart/"),{
        Amout: proNumber,
        CakeName: cakeName
    })
    .then(() =>{
        console.log('Done')
        
    })
    .catch((error)=>{
        alert("Không thành công, lỗi " + error);
    });
}





$('input.input-qty').each(function () {
  var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
  if (min == 0) {
      var d = 0
  } else d = min
  $(qty).on('click', function () {
      if ($(this).hasClass('minus')) {
          if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
          var x = Number($this.val()) + 1
          if (x <= max) d += 1
      }
      $this.attr('value', d).val(d)
  })
})

// ---------------------------------------------------
// Tang giam sl_1
function increment() {
document.getElementById('demoInput').stepUp();
}
function decrement() {
document.getElementById('demoInput').stepDown();
}

