// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOMex-KOA_r9GcrXXKS33ZOurKCGcQ3oA",
  authDomain: "eapantryapp.firebaseapp.com",
  projectId: "eapantryapp",
  storageBucket: "eapantryapp.appspot.com",
  messagingSenderId: "644269297340",
  appId: "1:644269297340:web:219aea1447a152a3834ab9",
  measurementId: "G-JV08RQTCBN"
};

// Initialize Firebase
const app = initializeFirestore(app)
const firestore = getFirestore(app)
export default (app,firestore);