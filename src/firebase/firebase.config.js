// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKtenuid7TY5FJNVTG3cdWEV4pvAbrZZk",
  authDomain: "elearn-assignment.firebaseapp.com",
  projectId: "elearn-assignment",
  storageBucket: "elearn-assignment.appspot.com",
  messagingSenderId: "176242321832",
  appId: "1:176242321832:web:369c43b173dcd278af159d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;