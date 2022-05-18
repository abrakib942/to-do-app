// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPYcesrSO-LEQWWMPJtKyaa49y8YE7ynY",
  authDomain: "to-do-app-21a6a.firebaseapp.com",
  projectId: "to-do-app-21a6a",
  storageBucket: "to-do-app-21a6a.appspot.com",
  messagingSenderId: "961691125235",
  appId: "1:961691125235:web:e07bf1f298cbae7acf7e86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
