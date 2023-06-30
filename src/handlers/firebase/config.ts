// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCipusgdJ7zr-owVPmVCZRS0vYUXX-wYBI",
    authDomain: "firebond-app.firebaseapp.com",
    projectId: "firebond-app",
    storageBucket: "firebond-app.appspot.com",
    messagingSenderId: "196169638088",
    appId: "1:196169638088:web:09b24102ce0645e42e45fd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)