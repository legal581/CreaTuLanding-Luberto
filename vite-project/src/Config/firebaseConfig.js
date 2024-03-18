
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
     
    const firebaseConfig = {
        apiKey: "AIzaSyA9hiL1Z2h5VGjNDujwZUd6dIEFbdZxSY4",
        authDomain: "react-60720.firebaseapp.com",
        projectId: "react-60720",
        storageBucket: "react-60720.appspot.com",
        messagingSenderId: "1008547719719",
        appId: "1:1008547719719:web:a7b8056c0f560c3cdf7c02"
      };
    
   
    const app = initializeApp(firebaseConfig);

    export const db = getFirestore(app);
