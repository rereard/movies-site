// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZJULUhy5qTfmyVNxSPBU7xF7gJKLV1FI",
  authDomain: "testing-49094.firebaseapp.com",
  projectId: "testing-49094",
  storageBucket: "testing-49094.appspot.com",
  messagingSenderId: "709889487172",
  appId: "1:709889487172:web:d937df800e40835c272711",
  measurementId: "G-9XE7YEV630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);