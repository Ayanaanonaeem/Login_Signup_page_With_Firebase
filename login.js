// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
//   import { getAuth,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signOut,
//     } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyAABv37MRCAKGt34GNcWuXYM14XPNMSC5Q",
//     authDomain: "my-first-project-513f2.firebaseapp.com",
//     projectId: "my-first-project-513f2",
//     storageBucket: "my-first-project-513f2.appspot.com",
//     messagingSenderId: "47101531514",
//     appId: "1:47101531514:web:a5a94eb3f967ee5eeef2c3",
//     measurementId: "G-FPCWJR1JDF"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth = getAuth(app);

  
  
  
// //   console.log(signup_btn);
  



  

// const login_email=document.getElementById("login_email")
// const login_password=document.getElementById("login_password")
// const login_btn=document.getElementById("login_btn")
// const logout_btn=document.getElementById("logout_btn")
  
// console.log(login_btn);
  



//   const login_page=document.getElementById("login_page")
//   const second=document.getElementById("second")
//   const email=document.getElementById("email")
//   const main_2=document.getElementById("main_2")
  
  
  
// //   signup_btn.addEventListener("click",signup)
//   login_btn.addEventListener("click",login)
//   logout_btn.addEventListener("click",logout)
  
  
  
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       console.log("user is logged in ====>");
      
//       // ...
//     } else {
//       // User is signed out
//       // ...
//       console.log("user is not logged in ====>");
      
//     }
//   });

  

// function login() {
//     signInWithEmailAndPassword(auth,login_email.value,login_password.value)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;

//     main_2.style.display="none"
//     second.style.display="block"
//     email.innerText=login_email.value

//     console.log(login_email.value);
//     console.log(login_password.value);
    

//     alert("logged in")
//     // ...
//   })
//   .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage)
//   });

// console.log(login_email.value);

// }

// function logout() {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         main_2.style.display="flex"
//     second.style.display="none"
//       }).catch((error) => {
//         // An error happened.
//         console.log(error);
        
//       });
      
// }