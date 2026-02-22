// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCflNB5ZAJQVG4Vufnl2mvPxu8nPSuHXNc",
    authDomain: "netflix-gpt-7b5a9.firebaseapp.com",
    projectId: "netflix-gpt-7b5a9",
    storageBucket: "netflix-gpt-7b5a9.firebasestorage.app",
    messagingSenderId: "729215096047",
    appId: "1:729215096047:web:22751bfa2669b554d1371a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();