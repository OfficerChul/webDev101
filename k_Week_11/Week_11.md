# Week \#

- [Recap]()
- [This Week]()
- [Exercise]()

## 🔙 Recap

## 📖 This Week

- React
    - useState
- Tools
    - Firebase
    - Vite

## 🔥 Firebase

<p align='center'><img src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png'/></p>


### What is Firebase?

```
Firebase is a Software as a Service(SaaS) that is a Google's platform which helps you develop mobile and web applications.

- It was an independent company founded in 2011, but acquired by Google in 2014.
- Firebase is the most popular SaaS and has the biggest SaaS community. Thanks to Google, it is keep developing.

```

### Why Firebase?
```
It provides backend service for free (almost), for example, authentication, cloud storage, cloud messaging, and so on.

- If you exceed the limit, then you need to pay money.
```

### When to use Firebase?
```
Since Firebase service is for convenience of backend from Google, you will loose your control on backend, for example, data management. But, as your service get larger, you will need more control on your backend.

If you want to make a prototype of the service that you want to launch, use Firebase. This will allows you to save your time to test out your service.
```

### How to use it?

1. Go to the [Firebase](https://firebase.google.com/) website

<p align='center'><img src='./images/firebase1.jpg'/></p>

2. Press `Get started` to start your project and create your project

<p align='center'><img src='./images/firebase2.png'/></p>
<p align='center'><img src='./images/firebase3.jpg'/></p>

3. Click the web icon and Add Firebase SDK to your project

<p align='center'><img src='./images/firebase4.jpg'/></p>

<p align='center'><img src='./images/firebase5.jpg'/></p>

```
SDK is a abbreviation for Software Development Kit which is a collection of software development tools such as compilers, debugger, or software framework.
```

- Type `npm install firebase` to install firebase

- Create a file called `firebase.js` below `src` folder and copy and paste the following code which is from Firebase.
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

and add `export default app;` at the very last line.
Import the `app` in your `App.js` file.

4. Now, build authentication function using `Email/Password`

<p align='center'><img src='./images/firebase6.jpg'/></p>

Enable the first option

<p align='center'><img src='./images/firebase7.jpg'/></p>


5. Now, set up is done. You can implement the authentication function!
Refer [this link](https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0) for more information.</br></br>
There are very kindness explanations on the document.
<p align='center'><img src='./images/firebase8.jpg'/></p>

## 🍇 Vite

<p align='center'><img src='https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667'/></p>

### What is Vite

Vite (French word for "quick", pronounced /vit/, like "veet") is a bundling tool like Webpack and Rollup. This helps the build time of React much faster than the boilerplace React.

This is very fast.

### Comparison

<p align='center'><img src='https://velog.velcdn.com/images/eamon3481/post/3b6b68a2-1c0b-4e66-9a5a-61394d6b4f7e/image.png'/></p>

For more information, go to [this link](https://vitejs.dev/)

### Set Up

```
npm create vite@latest [project name]
```

Done!

Write down your code as you did with just plain React!

## 0️⃣ React - useState

### What is useState?
```
useState is a type of React Hook which allows you to change the state by tracking the state.
```

### How to use it?
<p align='center'><img src='./images/usestate.jpg'/></p>

#### Syntax
```
const [[variable], set[variable]] = useState([initial value]);
```

### For example
```
const [number, setNumber] = useState(0); // number = 0

setNumber(3); // number = 3
setNumber(5); // number = 5
```

### Application
```
const [number, setNumber] = useState(0);

const addNumber = () => {
    setNumber(number + 1);
}

return (
    <>
        <button onClick={addNumber}>add Number</button>
        <h1>{number}</h1>
    </>
)
```

<p align='center'><img src='./images/usestate1.png' /></p>

## 🏠 Exercise