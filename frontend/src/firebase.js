import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//& const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "inventory-management-app-713b9.firebaseapp.com",
  projectId: "inventory-management-app-713b9",
  storageBucket: "inventory-management-app-713b9.appspot.com",
  messagingSenderId: "268938805265",
  appId: "1:268938805265:web:b2b9ecccf025f96157f1b0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
