// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIqVEER83p1n_SW_gQyUVCGXFvOCyzghA",
  authDomain: "copy-cat-c8cf7.firebaseapp.com",
  projectId: "copy-cat-c8cf7",
  storageBucket: "copy-cat-c8cf7.appspot.com",
  messagingSenderId: "72063345020",
  appId: "1:72063345020:web:8c5227f23b3ba8872a84f9",
  measurementId: "G-18GVH2WFDE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// we use these two objects throughout the application
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, db}


