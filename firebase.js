// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgCw_25sGWY7ek8eHSUXIfA5ggep-7su8",
  authDomain: "pantry-tracking-app-2b97c.firebaseapp.com",
  projectId: "pantry-tracking-app-2b97c",
  storageBucket: "pantry-tracking-app-2b97c.appspot.com",
  messagingSenderId: "841626436980",
  appId: "1:841626436980:web:de1f2dd4a99f6e7ef15821",
  measurementId: "G-C3L1DQLJGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

export {firestore}