// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3eDENur-hsbSYSeyFucnFl0iiHxXx2mA",
  authDomain: "moviebooking-edc15.firebaseapp.com",
  projectId: "moviebooking-edc15",
  storageBucket: "moviebooking-edc15.firebasestorage.app",
  messagingSenderId: "1003793533314",
  appId: "1:1003793533314:web:85416963320f430ebf679b",
  measurementId: "G-XNHXR71M5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
