var indexInit = 0
document.querySelector("#sidebar .side-menu").querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", (e) => {
        console.log(indexInit);
        document.querySelector("#sidebar .side-menu").querySelectorAll("li")[indexInit].classList.remove("active")
        item.classList.add("active");
        console.log(index);
        indexInit = index
        Page(index)
    })
})

// const allSideMenu = document.querySelectorAll('#admin #sidebar .side-menu.top li a');

// allSideMenu.forEach(item=> {
// 	const li = item.parentElement;

// 	item.addEventListener('click', function () {
// 		allSideMenu.forEach(i=> {
// 			i.parentElement.classList.remove('active');
// 		})
// 		li.classList.add('active');
// 	})
// });




// TOGGLE SIDEBAR
// const menuBar = document.querySelector('#admin #content nav .bx.bx-menu');
// const sidebar = document.getElementById('sidebar');

// menuBar.addEventListener('click', function () {
// 	sidebar.classList.toggle('hide');
// })







// const searchButton = document.querySelector('#content nav form .form-input button');
// const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
// const searchForm = document.querySelector('#content nav form');

// searchButton.addEventListener('click', function (e) {
// 	if(window.innerWidth < 576) {
// 		e.preventDefault();
// 		searchForm.classList.toggle('show');
// 		if(searchForm.classList.contains('show')) {
// 			searchButtonIcon.classList.replace('bx-search', 'bx-x');
// 		} else {
// 			searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		}
// 	}
// })





// if(window.innerWidth < 768) {
// 	sidebar.classList.add('hide');
// } else if(window.innerWidth > 576) {
// 	searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 	searchForm.classList.remove('show');
// }


// window.addEventListener('resize', function () {
// 	if(this.innerWidth > 576) {
// 		searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		searchForm.classList.remove('show');
// 	}
// })



// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classList.add('dark');
// 	} else {
// 		document.body.classList.remove('dark');
// 	}
// })


//- Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD_g23L-wg8ve1sVjkFYV106u0Z6rs8MHY",
//     authDomain: "ie104-760b6.firebaseapp.com",
//     databaseURL: "https://ie104-760b6-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "ie104-760b6",
//     storageBucket: "ie104-760b6.appspot.com",
//     messagingSenderId: "954364631488",
//     appId: "1:954364631488:web:c08eb53cbb2ae44aafd025"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();


// FILL PRODUCT--------------------------------
