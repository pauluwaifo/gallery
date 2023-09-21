import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

// FIREBASE AUTHENTICATION CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyBwQg72Nv5JO1MLcgVQXr275ipXc3odAXc",
  authDomain: "fir-course-7999d.firebaseapp.com",
  projectId: "fir-course-7999d",
  storageBucket: "fir-course-7999d.appspot.com",
  messagingSenderId: "134817105319",
  appId: "1:134817105319:web:58d9b21eafab51edaf2282",
  measurementId: "G-SJ5QT6WLYR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();