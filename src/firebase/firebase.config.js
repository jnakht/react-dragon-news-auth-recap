// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhMKlbGbF3IuChmR5Eo3qDUORxXzxUQg4",
  authDomain: "react-dragon-news-auth-2704c.firebaseapp.com",
  projectId: "react-dragon-news-auth-2704c",
  storageBucket: "react-dragon-news-auth-2704c.firebasestorage.app",
  messagingSenderId: "1053993186505",
  appId: "1:1053993186505:web:6330993e1f3a327c528918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;