
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "eapantryapp.firebaseapp.com",
  projectId: "eapantryapp",
  storageBucket: "eapantryapp.appspot.com",
  messagingSenderId: "644269297340",
  appId: "1:644269297340:web:219aea1447a152a3834ab9",
  measurementId: "G-JV08RQTCBN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore, app};


