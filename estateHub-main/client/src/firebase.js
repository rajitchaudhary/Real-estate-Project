// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-byprince.firebaseapp.com",
  projectId: "mern-estate-byprince",
  storageBucket: "mern-estate-byprince.appspot.com",
  messagingSenderId: "1009265769192",
  appId: "1:1009265769192:web:f84f4d15b55e9065bca75d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);