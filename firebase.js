// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtLfAGi37JkCEmv90__SbMgR4lAVE6a3U",
  authDomain: "fir-auth-20087.firebaseapp.com",
  projectId: "fir-auth-20087",
  storageBucket: "fir-auth-20087.appspot.com",
  messagingSenderId: "712966938319",
  appId: "1:712966938319:web:8ba302b87d4d2a11efa1ba",
};

// Initialize Firebase
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth();
export { auth };
