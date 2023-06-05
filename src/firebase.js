// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzsu39fABtdwWx_r5eASvlIob2XClz9uI",
  authDomain: "instagram-2a685.firebaseapp.com",
  projectId: "instagram-2a685",
  storageBucket: "instagram-2a685.appspot.com",
  messagingSenderId: "29003338104",
  appId: "1:29003338104:web:a1f019534fdf6ea6b7b88d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
