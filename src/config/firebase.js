import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

// FIREBASE AUTHENTICATION CONFIGURATION
const firebaseConfig = {
  apiKey: "",
  authDomain: "fir-course-7999d.firebaseapp.com",
  projectId: "fir-course-7999d",
  storageBucket: "fir-course-7999d.appspot.com",
  messagingSenderId: "134817105319",
  appId: "",
  measurementId: ""
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
