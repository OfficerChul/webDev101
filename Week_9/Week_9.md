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

```
Position property how the elements will be positioned on the screen.
There are four types of position.
- Static
- Relative
- Absolute
- Fixed
```

### Static
```
The element with position `static` is positioned as the normal flow of the code.
`top`, `left`, `bottom`, and `top` properties will not work with the `static` position.
```

### Relative
```
The element with position `relative` is positioned as the normal flow of the code with applying `top`, `left`, `bottom`, and `top` properties from the offset.
```
### Absolute
```
The element with position `absolute` doesn't follow the normal flow of the code.
`top`, `left`, `bottom`, and `top` properties affects the final position of the element.
```

### Fixed
```
The element with position `fixed` doesn't follow the normal flow of the code.
Just think that the element will be fixed on your screen, not on the website.
```

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

1. Make an empty page by removing every element in the outermost `div` tag.
<p align='center'><img src='./images/React_start1.png' /></p>
</br>
Then, you will be able to see a blank page (exclude `Hello World!` context).
<p align='center'><img src='./images/React_start2.jpg' /></p>

2. You can write the same code (but not exactly the same) as the code of html file to this react file.
</br>
There are some different elements due to JSX react extension.
</br> For example, 
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

## 🌄 React Component

### What is component
```
Component is a block of code that you can reuse in React.js.
This helps you write your code much faster.
Component is ussed as `tag` in React.
```

### For example...
The picture below is one `Line` component.
<p align='center'><img src='./images/component3.5.jpg'/></p>

I reused the `Line` component four times.
<p align='center'><img src='./images/component4.jpg'/></p>

### Lets look at the code!

<p align='center'><img src='./images/component3.jpg'/></p>

### How to create and use `components`?

1. Create `components` in `src` folder.
2. In `src/components`, create a component folder that you want to use, for example, `Header`.
> The first letter of the component's name should always be a capital letter.
3. Create `Header.js` for React.js and `Header.css` for css file in `src/components/Header`.
<p align='center'><img src='./images/component1.jpg'/></p>
4. Write code for the `js` file and the `css` file.

`React.js`
```
import React from 'react';
import './Line.css';

export default function Line() {
    return (
        <div>
            
            <hr className='line'/>
        </div>
    );
}
```

`css`
```
.line {
    
    border-top: 5px dotted #003C57;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
}
```

5. Import the component to `App.js` which is the main React file
<p align='center'><img src='./images/component2.jpg'/></p></br>
and then use it in the `App()` function. </br>
<p align='center'><img src='./images/component3.jpg'/></p> </br>
You will see </br>
<p align='center'><img src='./images/component4.jpg'/></p>

### Types of components

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

#### Application of React

You will make the website that use draw in hand by using `React.js`.

Take a look at the code in `webdev101_app` folder.
Enter `npm start`.

<p align='center'><img src='./images/webdev_webpage.png'/></p>

This website will continue to be updated and be the representative website of this tutorial.

For the rest of the class, you will learn
- How to create components folder
- How to utilize components
- How CSS and JSX works exactly the same way as we did using CSS and HTML
- How to give elements an animation
- How to apply font using `ttf` file
- How to use design tools
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
- How to use Router


## 🏠 Exercise