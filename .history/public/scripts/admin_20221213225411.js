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

var uid2

// ADD INFORMATION
//## LẤY DATA NGƯỜI DÙNG TỪ DATABASE VÀ THÊM VÀO ADMIN
var uID = 0;
get(child(dbref, `UserList/`))
.then((snapshot)=>{
    var userData = []; //Data của người dùng lấy từ database
    snapshot.forEach(childSnapshot => {
        userData.push(childSnapshot.val());
    });
//Thêm popup theo id để dễ hiện thông tin
    userData.forEach((e)=>{
        uID += 1
      document.getElementById('account').innerHTML += 
      `
      <tr>
        <td>
          <p id = "username${uID}">${e.username}</p>
        </td>
        <td id = "email${uID}">${e.email}</td>
        <td>
            <a href = "#popup_user${uID}"><i class = "bx bxs-user-detail"></i></a>
            <a href = "#popup_bill${uID}"><i class='bx bxs-cart-alt'></i></a>
        </td>
      </tr>
      `         
    
      document.getElementById('todo').innerHTML +=
      `
    <div class="overlay" id="popup_bill${uID}">
        <div class="popup_content"><a class="close" href="#">&times;</a>
            <div class="form_input">
            <h2>THÔNG TIN ĐƠN HÀNG</h2>
                <p id="ad${uID}" class="uid"></p>
            <div class="input-box">
                <p>Tên bánh:</p>
                <p id="Billdetail${uID}" class="input-box-info"></p>
            </div>
            <div class="input-box">
                <p>Số lượng:</p>
                <p id="Billnumber${uID}" class="input-box-info"></p>
            </div>
            <div class="input-box">
                <p>Số tiền:</p>
                <p id="Billmoney${uID}" class="input-box-info"></p>
            </div>
            <div class="form_button">
                <a>
                    <button class="Billbtn" id="bill${uID}">Xóa</button>
                </a>
            </div>
            </div>
        </div>
    </div>  
    
    <div class="overlay" id="popup_user${uID}">
        <div class="popup_content"><a class="close" href="#">&times;</a>
            <div class="form_input">
                <h2>THÔNG TIN KHÁCH HÀNG</h2>
                <div class="input-box">
                    <p>Tên</p>
                    <p id="Username${uID}" class="input-box-info"></p>
                </div>
                <div class="input-box">
                    <p>Email</p>
                    <p id="Useremail${uID}" class="input-box-info"></p>
                </div>
                <div class="input-box">
                    <p>Địa chỉ</p>
                    <p id="Useraddress${uID}" class="input-box-info"></p>
                </div>
                <div class="input-box">
                    <p>Số điện thoại</p>
                    <p id="Userphone${uID}" class="input-box-info"></p>
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
var cakename


var len = 0;
var ID = 0;
var ID2 = 0;
var ID3 = 0;
get(child(dbref, `UserList/`))
.then((snapshot)=>{
    var userData = [];
    snapshot.forEach(childSnapshot => {
        userData.push(childSnapshot.val());
    });

    userData.forEach((e)=>{
        let uid = e.uid

        get(child(dbref, `UserList/${uid}/Bill`))
        .then((snapshot)=>{
            
            var cakeData = []; //Data của sản phẩm lấy từ database
            snapshot.forEach(childSnapshot => {
                cakeData.push(childSnapshot.val());
            });
            
            ID2 += 1;
            cakeData.forEach((e)=>{
                // console.log(uid)
                document.getElementById(`ad${ID2}`).innerHTML = uid

                cakename = String(e.Name)
                document.getElementById(`Billdetail${ID2}`).innerHTML += `${cakename}<br>`

                len = String(e.Amout)
                document.getElementById(`Billnumber${ID2}`).innerHTML += `${len}&nbsp;&nbsp;`

             
            })
            
            
        
        })
        
        
        
        get(child(dbref, `UserList/${uid}/Total`))
        .then((snapshot) => {
            var moneyData = [];
            snapshot.forEach(childSnapshot => {
                moneyData.push(childSnapshot.val());
            });
            ID += 1;
            moneyData.forEach((e)=>{
                // console.log(e)
                document.getElementById(`Billmoney${ID2}`).innerHTML += `${e}đ`
                if(e != ''){
                    // alert('a')
                    document.getElementById(`username${ID}`).innerHTML += `<i class='bx bx-check-circle' style="color:#DD5353;"></i>`
                }
            })
        })
        
    

    ID3 += 1
    // console.log(e.fullname)
    document.getElementById(`Username${ID3}`).innerHTML = e.fullname
    document.getElementById(`Useremail${ID3}`).innerHTML = e.email
    document.getElementById(`Useraddress${ID3}`).innerHTML = e.address
    document.getElementById(`Userphone${ID3}`).innerHTML = e.phone
        
        
    
    })
    //
    document.querySelectorAll('.Billbtn').forEach(e => {
        e.addEventListener('click', ()=>{
            
            Billdetail = e.id.replace('bill','')
            // console.log(Billdetail)
            
            uid2 = document.getElementById(`ad${Billdetail}`).innerText
            console.log(uid2)
            remove(ref(db, `UserList/${uid2}/Bill/`));
            remove(ref(db, `UserList/${uid2}/Total/Money/`));
            // Toastinette.init({
            //     position: 'top-right',
            //     title: 'Thành công',
            //     message: 'Xóa thành công',
            //     autoClose: 2500,
            //     progress: true
            // });
            // alert('ok')
            location.reload();
        })
    })
})
.catch(()=>{
  alert("LỖI" + error);
});



// get(child(dbref, `UserList/`))
// .then((snapshot) => {
//     var userData = [];
    
//     snapshot.forEach(childSnapshot => {
//         userData.push(childSnapshot.val());
//     });
//     ID3 += 1;
//     userData.forEach((e)=>{
//         console.log(ID3)
//         
        
//     })
// })



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
        Toastinette.init({
            position: 'top-right',
            title: 'Thành công',
            message: 'Thêm sản phẩm thành công',
            // type: 'success',
            autoClose: 5000,
            progress: true
        });
        // alert("Thành công!");
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
        Toastinette.init({
            position: 'top-right',
            title: 'Thành công',
            message: 'Xóa sản phẩm thành công',
            // type: 'success',
            autoClose: 2500,
            progress: true
        });
        // alert("Xóa thành công!");
    })
    .catch((error)=>{
        Toastinette.init({
            position: 'top-right',
            title: 'Lỗi',
            message: 'Xóa sản phẩm không thành công, lỗi ' + error,
            type: 'error',
            autoClose: 2500,
            progress: true
        });
        // alert("Không thành công, lỗi " + error);
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






