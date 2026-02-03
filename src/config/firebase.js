// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-Uzw3IGT0sX8Xbo63xVwJmuWjEizSHvA",
  authDomain: "ecommerce-3c2f5.firebaseapp.com",
  projectId: "ecommerce-3c2f5",
  storageBucket: "ecommerce-3c2f5.appspot.com",
  messagingSenderId: "965393234207",
  appId: "1:965393234207:web:1d648517a3362573e7182a",
  measurementId: "G-2ZGGKHZ8PZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
