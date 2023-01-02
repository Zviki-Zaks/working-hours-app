// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABxhXXUTRu4Wn8jpnNPimHHFv3xyXMslA",
  authDomain: "working-hours-app-8a910.firebaseapp.com",
  projectId: "working-hours-app-8a910",
  storageBucket: "working-hours-app-8a910.appspot.com",
  messagingSenderId: "273926312970",
  appId: "1:273926312970:web:827fc3288a3503bb213bf3",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// Initialize Auth
export const auth = getAuth(firebaseApp);
auth.languageCode = "he";
// Initialize Firestore
export const db = getFirestore(firebaseApp);
