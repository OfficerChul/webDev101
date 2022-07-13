# Week 9

- [Recap]()
- [This Week]()
- [Exercise]()

## 🔙 Recap

- CSS - Grid
- React.js - Set Up Development Environment

## 📖 This Week

- CSS
    - Position
        - static
        - relative
        - absolute
        - fixed
    - Hover
- React.js

## 🧶 CSS - Position

### What is Position?

### Static

### Relative

### Absolute

### Fixed

### Example

## ✍️ CSS - Hover

### What is hover?

### How to use it?

### Example

## 🧔 React.js

<p align='center'><img width='300' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' /></p>

### What is React?

React is a declarative, efficient JavaScript Library (Framework) for building user interface. This helps you to build your website by stacking a very small block of code called `components`.

### Why React?

1. Component Based Developement (Feat. Lego)
    - Each component that you built can be reused.
    - It makes web dev much easier and flexible.
    
2. JSX (JavaScript + XML)
    - It allows you to use HTML-like element in the JavaScript.
    - Can learn faster than other frameworks such as Angular and Vue.

`App.js`
```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
3. Virtual DOM (Document Object Model)
  - React cerated a copy of DOM which keep tracks of only changes and updates the web site which made the process of laoding website simplifier and faster.

### How to use it?

1. Make an empty page by removing every element in `div` tag with `className` `App`
<p align='center'><img src='./images/React_start1.png' /></p>
</br>
<p align='center'><img src='./images/React_start2.jpg' /></p>

2. You can write the same code (but not exactly the same) from html file to this react file.
</br>
Some different elements due to JSX react extension.

  1. When you give a class name to a certain tag </br>

`html`

```
<div class='html_tag'> 
</div>
```

`react`
``` 
<div className='react_tag`>
</div>
```

  2. Expression in JSX
for example, `if statement`

```
function App() {
  let x = 5;

  if (x < 15) {
    x = 15;
  }
  return (
    <div className="App">
      <h1>this is x: {x}</h1>
    </div>
  );
}
```

But, put the expression outside of the `return` function.

> Don't forget to put `;` (semicolon) at the end of the statement.

### How to create and use `components`?

1. You create `components` in `src` folder.
2. In `src/components`, create a component folder that you want to use, for example, `Header`.
> The first letter of the name of the component should always be a capital letter.
3. Create `Header.js` for react.js and `Header.css` for css file in `src/components/Header`.

## 🏠 Exercise