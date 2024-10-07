
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    
    } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAABv37MRCAKGt34GNcWuXYM14XPNMSC5Q",
    authDomain: "my-first-project-513f2.firebaseapp.com",
    projectId: "my-first-project-513f2",
    storageBucket: "my-first-project-513f2.appspot.com",
    messagingSenderId: "47101531514",
    appId: "1:47101531514:web:a5a94eb3f967ee5eeef2c3",
    measurementId: "G-FPCWJR1JDF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  
  
  
//   console.log(signup_btn);


const signup_email=document.getElementById("signup_email")
const signup_password=document.getElementById("signup_password")
const signup_btn=document.getElementById("signup_btn")



  


  
  signup_btn.addEventListener("click",signup)
  
  
  
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("user is logged in ====>");
      
      // ...
    } else {
      // User is signed out
      // ...
      console.log("user is not logged in ====>");
      
    }
  });

  function signup() {
    createUserWithEmailAndPassword(auth,signup_email.value,signup_password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      
      signup_email.value=""
      signup_password.value=""
    alert("your account was created login now")
    // signup_email.value=""
    // signup_password.value=""
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  
}



