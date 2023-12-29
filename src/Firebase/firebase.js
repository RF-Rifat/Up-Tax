// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlnqimLK9QRCr5LzU5f7z1qqcPkG3H4AM",
  authDomain: "uphtax-2a0a9.firebaseapp.com",
  projectId: "uphtax-2a0a9",
  storageBucket: "uphtax-2a0a9.appspot.com",
  messagingSenderId: "597355052114",
  appId: "1:597355052114:web:d346699467b650919eb38b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
