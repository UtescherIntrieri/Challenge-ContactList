// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuZu7EZEY3bHelGmCkKFoFMvBw08T2a1M",
  authDomain: "contactlist-78011.firebaseapp.com",
  databaseURL: "https://contactlist-78011-default-rtdb.firebaseio.com",
  projectId: "contactlist-78011",
  storageBucket: "contactlist-78011.appspot.com",
  messagingSenderId: "517748562502",
  appId: "1:517748562502:web:c8c6be5ba15adb33d9c847",
  measurementId: "G-RRG9Z6G0FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);