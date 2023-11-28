// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK5O21RzQPW_zghIISdMyccHl4DnzynDM",
  authDomain: "netflix-6b5fe.firebaseapp.com",
  projectId: "netflix-6b5fe",
  storageBucket: "netflix-6b5fe.appspot.com",
  messagingSenderId: "613695223645",
  appId: "1:613695223645:web:e3134085542bdb32be1ab4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
