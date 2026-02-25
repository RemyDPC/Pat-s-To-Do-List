// src/firebase.js

// 1. Import the functions we need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <--- THIS WAS MISSING

// 2. Your web app's Firebase configuration
// (PASTE YOUR ACTUAL KEYS FROM FIREBASE CONSOLE HERE)
const firebaseConfig = {
  apiKey: "AIzaSyDWcfxG9doRSgbsTClmwf5nc7NTOQ7Dc3I...", 
  authDomain: "pat-s-to-do-list.firebaseapp.com",
  projectId: "pat-s-to-do-list",
  storageBucket: "pat-s-to-do-list.firebasestorage.app",
  messagingSenderId: "1046274432105...",
  appId: "1:1046274432105:web:5a0952034746b6bdaf16f8"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. Initialize and EXPORT the Database
export const db = getFirestore(app); // <--- THIS WAS MISSING AND CAUSED THE ERROR