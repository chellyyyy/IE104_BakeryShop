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



// ADD INFORMATION
//## LẤY DATA NGƯỜI DÙNG TỪ DATABASE VÀ THÊM VÀO ADMIN
var uID = 0;
get(child(dbref, `UserList/`))
.then((snapshot)=>{
    var userData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        userData.push(childSnapshot.val());
    });

    userData.forEach((e)=>{
        uID += 1
      document.getElementById('account').innerHTML += 
      `
      <tr>
        <td>
          <p id = "username">${e.username}</p>
        </td>
        <td id = "email">${e.email}</td>
        <td>
            <a href = "#popup_user"><i class = "bx bxs-user-detail"></i></a>
            <a href = "#popup_bill${uID}"><i class='bx bxs-cart-alt' ></i></a>
        </td>
      </tr>
      `         
    
      document.getElementById('todo').innerHTML +=
      `
    <div class="overlay" id="popup_bill${uID}">
        <div class="popup_content"><a class="close" href="#">&times;</a>
            <div class="form_input">
            <h2>Thông tin đơn hàng</h2>
            <div class="input-box">
                <p>Tên bánh</p>
                <p id="Billdetail${uID}"></p>
            </div>
            <div class="input-box">
                <p>Số lượng</p>
                <input type="number" id="Billnumber${uID}">
            </div>
            <div class="input-box">
                <p>Số tiền</p>
                <input type="number" id="Billmoney${uID}">
            </div>
            <div class="form_button">
                <button class="button-login" id="Isnbtn">Xóa</button>
            </div>
            </div>
        </div>
    </div>    
      `
    })
})
.catch(()=>{
  alert("LỖI" + error);
});

//FETCH ĐƠN HÀNG
var Billdetail
var Billnumber
var Billmoney

var len
var ID = 0;
get(child(dbref, `UserList/`))
.then((snapshot)=>{
    var userData = [];
    snapshot.forEach(childSnapshot => {
        userData.push(childSnapshot.val());
    });

    userData.forEach((e)=>{
        ID += 1
        console.log(ID)
        //Xử lí dữ liệu để nạp vào khung tên bánh (bill)
        // console.log(Object.keys(e.Bill))
        Billdetail = String((Object.keys(e.Bill))).replace(',Money', '')
        Billdetail = Billdetail.replace(',Status', '')
        let uid = e.uid

        get(child(dbref, `UserList/${uid}/Bill/`))
        .then((snapshot)=>{
            var BillData = [];
            snapshot.forEach(childSnapshot => {
                BillData.push(childSnapshot.val());
            })
            console.log(e.Bill)
        })
        // 
        
         //Xử lí tên bánh

        // console.log(userData[0].Bill.Cake1.Amout)
        // console.log(userData)


        // Billnumber = Billdetail.match(/\d/g);
        // Billnumber = Billnumber.join('')
        // len = Billnumber.length
        // console.log(len)
        
        document.getElementById(`Billdetail${ID}`).innerText = Billdetail
    })
})
.catch(()=>{
  alert("LỖI" + error);
});
//## LẤY DATA SẢN PHẨM TỪ DATABASE VÀ THÊM VÀO Admin
var detected = '';
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
        <p>${e.NameOfCake}</p><button class = 'Delbtn'><a href='#popup_del' class='detect' id='${e.ID}'>x</a></button>
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

//TEST XEM HÀM CÓ HOẠT ĐỘNG KO
document.getElementById('test').addEventListener('click', () => {
    alert(detected)
})

// INSERT PRODUCT--------------------------------
// -References-
var id = document.getElementById("id_pro");
var name = document.getElementById("name_pro");
var price = document.getElementById("price_pro");
var pic = document.getElementById("pic_pro");
var desc = document.getElementById("desc_pro");

var insBtn = document.getElementById("Insbtn"); 
var selBtn = document.getElementById("Selbtn"); 
var updBtn = document.getElementById("Updbtn"); 
var delBtn = document.getElementById("Delbtn");

// -Insert data-
function InsertData(){
    set(ref(db, "TheCakes/"+ id.value),{
        ID: id.value,
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

// -Select data-
function SelectData(){
    const dbref = ref(db);
    get(child(dbref, "TheCakes/"+ id.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            name.value = snapshot.val().NameOfCake;
            price.value = snapshot.val().PriceOfCake;
            pic.value = snapshot.val().PicOfCake;
            desc.value = snapshot.val().Descript;
        }
        else{
            alert("Không tìm thấy!");
        }
    })
    .catch((error)=>{
        alert("Không thành công, lỗi " + error);
    });
}

// -Update data-
function UpdateData(){
    update(ref(db, "TheCakes/"+ id.value),{
        NameOfCake: name.value,
        PriceOfCake: price.value,
        PicOfCake: pic.value,
        Descript: desc.value
    })
    .then(() =>{
        alert("Thành công cập nhật!");
        name.value = "";
        price.value = "";
        pic.value = "";
        desc.value = "";
    })
    .catch((error)=>{
        alert("Không thành công, lỗi " + error);
    });
}

// -Delete data Product-
function DeleteData(){
    remove(ref(db, "TheCakes/"+ detected),{
    })
    .then(() =>{
        alert("Xóa thành công!");
    })
    .catch((error)=>{
        alert("Không thành công, lỗi " + error);
    });
    // location.reload();
}


// -Delete data User-
var user = document.getElementById("username");
var mail = document.getElementById("email");
function DeleteUser(){
    remove(ref(db, "UserList/"+ id.user),{
    })
    .then(() =>{
        alert("Xóa thành công!");
    })
    .catch((error)=>{
        alert("Không thành công, lỗi " + error);
    });
}

// -Assign Events to Btns-
// insBtn.addEventListener('click', InsertData);
// selBtn.addEventListener('click', SelectData);
// updBtn.addEventListener('click', UpdateData);
// delBtn.addEventListener('click', DeleteData);

document.getElementById('Isnbtn').addEventListener('click', InsertData);
document.getElementById('Yesbtn').addEventListener('click', DeleteData);
// document.getElementById('Delbtn').addEventListener('click', DeleteData);
// User
// document.getElementById('Deluser').addEventListener('click', DeleteUser);








// document.getElementById('test').addEventListener('click', () => {
//     alert('22')
// })




// var x = document.querySelectorAll('.detect');
// function a() {
    
//     alert(x)
//     console.log(x)
// }



// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }




//Lấy ID của sản phẩm khi click vào
// document.addEventListener('click', function(e) {
//     alert( e.target.id );
// }, false);






