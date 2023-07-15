

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
    apiKey: "AIzaSyD-0ta-MZTDrvAzvglmv_XTZDeLO-vDaqA",
    authDomain: "eshop-a8c59.firebaseapp.com",
    projectId: "eshop-a8c59",
    storageBucket: "eshop-a8c59.appspot.com",
    messagingSenderId: "539399496221",
    appId: "1:539399496221:web:d954a7e7f59d7cb520dcf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;