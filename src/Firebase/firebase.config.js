import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABE3-d4kVs4LmjAXdg7-3YqSaG9Ov4lDI",
  authDomain: "amelia-medical-camp.firebaseapp.com",
  projectId: "amelia-medical-camp",
  storageBucket: "amelia-medical-camp.appspot.com",
  messagingSenderId: "810186934325",
  appId: "1:810186934325:web:c25e2d3054fe13f175497c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth