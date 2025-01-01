import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxJzWineMKVG4xKu5HTYGAsHYPms9vE98",
  authDomain: "react-user-id.firebaseapp.com",
  projectId: "react-user-id",
  storageBucket: "react-user-id.firebasestorage.app",
  messagingSenderId: "508217100465",
  appId: "1:508217100465:web:e8d4163f3be3d6111c3a90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);