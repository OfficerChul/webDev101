// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrllKM59OO2dkCnh_mmMnfjf3X13NCY54",
  authDomain: "webdev101-8f1c7.firebaseapp.com",
  projectId: "webdev101-8f1c7",
  storageBucket: "webdev101-8f1c7.appspot.com",
  messagingSenderId: "705339352664",
  appId: "1:705339352664:web:52292b8bb2ef0c3b118c2d",
  measurementId: "G-5K4Y0YFWGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;