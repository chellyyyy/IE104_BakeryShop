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
get(child(dbref, `UserList/`))
.then((snapshot)=>{
    var userData = []; //Data của sản phẩm lấy từ database
    snapshot.forEach(childSnapshot => {
        userData.push(childSnapshot.val());
    });

    userData.forEach((e)=>{
      document.getElementById('account').innerHTML += 
      `
      <tr>
        <td>
          <p>${e.username}</p>
        </td>
        <td>${e.email}</td>
        <td><button id = "Delbtn">x</button></td>
      </tr>
      `         
    })
})
.catch(()=>{
  alert("LỖI" + error);
});

//## LẤY DATA SẢN PHẨM TỪ DATABASE VÀ THÊM VÀO Admin
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
        <p>${e.NameOfCake}</p><button id = "Delbtn">x</button>
      </li>
      `         
    })
})
.catch(()=>{
  alert("LỖI" + error);
});

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

// -Delete data-
function DeleteData(){
    remove(ref(db, "TheCakes/"+ id.value),{
    })
    .then(() =>{
        alert("Xóa thành công!");
        name.value = "";
        price.value = "";
        pic.value = "";
        desc.value = "";
    })
    .catch((error)=>{
        alert("Không thành công, lỗi " + error);
    });
    }

// -Assign Events to Btns-
insBtn.addEventListener('click', () => {
  // InsertData();
    alert('1')
});

document.getElementById('test').addEventListener('click', () => {
  
})
// selBtn.addEventListener('click', SelectData);
// updBtn.addEventListener('click', UpdateData);
// delBtn.addEventListener('click', DeleteData);