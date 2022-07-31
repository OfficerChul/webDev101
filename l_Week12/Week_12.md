# Week 12

- [Recap]()
- [This Week]()
- [Exercise]()

## 🔙 Recap
- React
    - UseState
- Firebase
- Vite

## 📖 This Week

- Firebase
    - Authentication
- CSS tools
    - Bootstrap
    - Tailwind
    - Codepen
- Deploy Website

## 🔥 Firebase Authentication

1. Install firebase using npm
```
npm install firebase
```

2. Create a file called `firebase-config.js` and paste the following line of code
```
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
```
## 👩‍🔬 CSS Tools

### Bootstrap

#### What is Bootstrap

```
Bootstrap is a CSS framework for developing responsive and mobile-first websites.

Bootsrap 5 is the newest version of Bootstrap.
```

> For more information, this [link](https://react-bootstrap.github.io/getting-started/introduction/)

#### How to install and use it?

1. If you are using npm, type to install react-bootstrap
```
npm i react-bootstrap
```

2. 

### Tailwind

#### What is Tailwind

#### How to install and use it?

### Codepen

#### What is Codepen

#### How to install and use it?


## 🏠 Exercise