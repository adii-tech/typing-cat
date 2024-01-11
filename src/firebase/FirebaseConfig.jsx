// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_1Ne2TS50vI2Ur6qw9Dp61Npq6zt5tFE",
  authDomain: "typeing-cat.firebaseapp.com",
  projectId: "typeing-cat",
  storageBucket: "typeing-cat.appspot.com",
  messagingSenderId: "296680340151",
  appId: "1:296680340151:web:7d32091e6b0513aaea6b32",
  measurementId: "G-CLPXVBRHNS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// we use these two objects throughout the application
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, db}


