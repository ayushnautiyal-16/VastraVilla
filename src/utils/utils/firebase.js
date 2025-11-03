// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC57slGfWlPLHLk3lO5dXKSdq55rW7uDN8",
    authDomain: "vastravilla-182ca.firebaseapp.com",
    projectId: "vastravilla-182ca",
    storageBucket: "vastravilla-182ca.firebasestorage.app",
    messagingSenderId: "489003173239",
    appId: "1:489003173239:web:35b30a0bae7e830f734d72",
    measurementId: "G-KNHQCK1T5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();