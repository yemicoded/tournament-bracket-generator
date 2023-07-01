// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlV4hWzYOVRv9KGC5YKc6vm5InPV39A7U",
  authDomain: "firebond-test1-d47d9.firebaseapp.com",
  projectId: "firebond-test1-d47d9",
  storageBucket: "firebond-test1-d47d9.appspot.com",
  messagingSenderId: "218092988765",
  appId: "1:218092988765:web:62fe49f8a79de3a1e1a0b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)