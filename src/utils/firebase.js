// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyC57slGfWlPLHLk3lO5dXKSdq55rW7uDN8",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "vastravilla-182ca.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "vastravilla-182ca",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "vastravilla-182ca.firebasestorage.app",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "489003173239",
    appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:489003173239:web:35b30a0bae7e830f734d72",
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-KNHQCK1T5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage(app);
