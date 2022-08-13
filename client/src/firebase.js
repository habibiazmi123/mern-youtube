// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBdRxXbWnPnx4P2SZaNh29symCO4puqhI",
  authDomain: "mern-yt-83e22.firebaseapp.com",
  projectId: "mern-yt-83e22",
  storageBucket: "mern-yt-83e22.appspot.com",
  messagingSenderId: "210091079779",
  appId: "1:210091079779:web:ac23660477239e9da9a056",
  measurementId: "G-WNZ6GM4QGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;