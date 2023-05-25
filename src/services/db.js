// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRlJcC5c_apoTjyt1X7C-VvxfPjLPrnx4",
  authDomain: "coder-house-6e8c4.firebaseapp.com",
  projectId: "coder-house-6e8c4",
  storageBucket: "coder-house-6e8c4.appspot.com",
  messagingSenderId: "601036691185",
  appId: "1:601036691185:web:e1c84c13afd6aac954fb50"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()