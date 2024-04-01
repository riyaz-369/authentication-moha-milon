// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCdjOFqBbQEnD5hbKIZFj-5IjGa-ejE18",
  authDomain: "authentication-moha-milo-ffdc9.firebaseapp.com",
  projectId: "authentication-moha-milo-ffdc9",
  storageBucket: "authentication-moha-milo-ffdc9.appspot.com",
  messagingSenderId: "561481869531",
  appId: "1:561481869531:web:088ff48d6c73e3474844fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
