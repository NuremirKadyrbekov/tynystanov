// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpZhdXcMofIuUo4alTQ5BnwcxrvARhMW8",
  authDomain: "tynystanov-6d8fa.firebaseapp.com",
  projectId: "tynystanov-6d8fa",
  storageBucket: "tynystanov-6d8fa.appspot.com",
  messagingSenderId: "169180205795",
  appId: "1:169180205795:web:1353c7640961f3c50a6bd6",
  measurementId: "G-K7CXCJPWEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Аутентификация
const db = getFirestore(app); 
const storage = getStorage(app);

export { auth, db, storage };