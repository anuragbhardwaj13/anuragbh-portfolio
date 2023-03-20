// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCfE_J19LEYBQxPa3fgRC-XuQuzeT-Zijg",
  authDomain: "anuragbh-portfolio.firebaseapp.com",
  projectId: "anuragbh-portfolio",
  storageBucket: "anuragbh-portfolio.appspot.com",
  messagingSenderId: "983999227562",
  appId: "1:983999227562:web:6ef4b830520f8c31e9d2d3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
