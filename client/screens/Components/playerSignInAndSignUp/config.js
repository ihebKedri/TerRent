// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAx7a32E9I8zpH4ceB1RXaI-5t2zv-G-Q",
  authDomain: "terrent-fe1f5.firebaseapp.com",
  databaseURL: "https://terrent-fe1f5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "terrent-fe1f5",
  storageBucket: "terrent-fe1f5.appspot.com",
  messagingSenderId: "694630254699",
  appId: "1:694630254699:web:b1522299826b5aa833892e",
  measurementId: "G-BHGHJ8GHML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authentcation=getAuth(app)
export {authentcation,app,analytics}