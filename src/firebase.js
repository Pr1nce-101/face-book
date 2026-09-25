// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj8ZRhB3n7aLzIrO_olJZLMWRY5pgUuIU",
  authDomain: "face-book-27122.firebaseapp.com",
  projectId: "face-book-27122",
  storageBucket: "face-book-27122.firebasestorage.app",
  messagingSenderId: "762364119455",
  appId: "1:762364119455:web:74cad738bf3cd033c0d5aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);