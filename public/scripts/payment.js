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



var uid = localStorage.getItem('uid')
var noship = localStorage.getItem('noship')
var withship = 0;
var middle = 0;

document.getElementById('noship').innerText = noship + 'đ';

middle = Number(noship)

withship = Number(middle + 10000);
document.getElementById('withship').innerText = withship + 'đ';



// location.reload();
get(child(dbref, `UserList/${uid}/Total`))
.then((snapshot)=>{
  var cartSum = []
  snapshot.forEach(childSnapshot => {
    cartSum.push(childSnapshot.val());
  })
  console.log(cartSum)
  if(cartSum == ''){
    document.getElementById('counter').style.display = 'none';
  }

})


document.getElementById('paybutton').addEventListener('click', () => {
  update(ref(db, `UserList/${uid}/Total`),{
      Money: withship
  })
  .then(() =>{
    Toastinette.init({
        position: 'top-right',
        title: 'Thành công',
        message: 'Mua hàng thành công',
        // type: 'success',
        autoClose: 5000,
        progress: true
    });
      // alert("Thành công!");
      document.getElementById('counter').style.display = 'none';
      
  })
  .catch((error)=>{
    Toastinette.init({
        position: 'top-right',
        title: 'Thất bại',
        message: 'Mua hàng không thành công',
        type: 'error',
        autoClose: false,
        // progress: true
    });
      // alert("Không thành công, lỗi " + error);
  });
})



