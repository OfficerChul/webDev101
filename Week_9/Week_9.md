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
But, there are some different elements due to JSX react extension.

 - When you give a class name to a certain tag </br>

`html`:

```
<div class='html_tag'> 
</div>
```

`React`:
``` 
<div className='react_tag`>
</div>
```

But, put the expression outside of the `return` function.

> Don't forget to put `;` (semicolon) at the end of the statement.

### How to create `components`?

1. Create `components` in `src` folder.
2. In `src/components`, create a component folder that you want to use, for example, `Header`.
> The first letter of the component's name should always be a capital letter.
3. Create `Header.js` for React.js and `Header.css` for css file in `src/components/Header`.
4. Write code for the `js` file and the `css` file.

### How to use `components`?

#### Class Components vs Function Components

#### Class Components (Old Fashion)

1. It is a old way to make a component.
2. Slow, heavy and complicated.
3. Many old companies have a React code with `Class Component`.

```
import React, { Component } from 'react'

export default class Hello extends Component{
  render(){
    return(
      <div>
          Hello World!
      </div>
    )
 }
}
```

#### Function Components (New Fashion)

1. It is a new way to make a component.
2. Newcomers are using `Function Component`.
3. Simple and Fast.
4. It is getting famous and all companies are now using `Function Component`.

```
import React from 'react'

export default function Hello() {
  return (
     <div>
        Hello World!
    </div>
 )
}
```

#### Application of Component

Take a look at the code in `webdev101_app` folder.

<p align='center'><img src='./images/webdev_webpage.png'/></p>

```
You will be able to understand
1. How to create components folder
2. How to utilize components
3. CSS and JSX works exactly the same way as we did using CSS and HTML.
4. How to give elements an animation
5. How to apply font using `ttf` file
6. How to use design tools
 - shapedivider:
 https://www.shapedivider.app/
 - color palette:
 https://mycolor.space/
 - haikei:
 https://haikei.app/
 - coolbackgrounds:
 https://coolbackgrounds.io/
 - dribble:
 https://dribbble.com/ 
```

## 🏠 Exercise