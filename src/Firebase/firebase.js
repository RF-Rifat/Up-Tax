// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4LKn5LKJio714TcIBva_nEuppbUOZ0bw",
  authDomain: "up-taxpay.firebaseapp.com",
  projectId: "up-taxpay",
  storageBucket: "up-taxpay.appspot.com",
  messagingSenderId: "426045244718",
  appId: "1:426045244718:web:6422ab2634fc83a87c66bf",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
