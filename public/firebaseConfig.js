// Import the functions you need from the SDKs you need
import {getAnalytics} from "firebase/analytics";
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey : "AIzaSyBOoA5qM0WPdlzONtRNBZf0ZAqJ7n1fnPw",
  authDomain : "dear-crush-b21f3.firebaseapp.com",
  projectId : "dear-crush-b21f3",
  storageBucket : "dear-crush-b21f3.appspot.com",
  messagingSenderId : "553198203484",
  appId : "1:553198203484:web:89c38ee1aeb2f9a5fa2c99",
  measurementId : "G-NZFPH8JYS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
