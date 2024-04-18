// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsFFpbGsz226bjnqEoD4UsgdrcIaNTB7U",
  authDomain: "codegirls-16544.firebaseapp.com",
  projectId: "codegirls-16544",
  storageBucket: "codegirls-16544.appspot.com",
  messagingSenderId: "752714755775",
  appId: "1:752714755775:web:01cd9395c4f9468641600a",
  measurementId: "G-8R5WQXH6PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

