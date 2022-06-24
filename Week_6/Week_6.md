# Week 6

- [Recap](https://github.com/OfficerChul/webDev101/blob/main/Week_6/Week_6.md#-recap)
- [This Week](https://github.com/OfficerChul/webDev101/blob/main/Week_6/Week_6.md#-this-week)
- [HTML](https://github.com/OfficerChul/webDev101/blob/main/Week_6/Week_6.md#-html)
- [Link JavaScript](https://github.com/OfficerChul/webDev101/blob/main/Week_6/Week_6.md#-link-javascript-externally)
- [JavaScript Programming](https://github.com/OfficerChul/webDev101/blob/main/Week_6/Week_6.md#-javascript-programming-)
- [Exercise](https://github.com/OfficerChul/webDev101/blob/main/Week_6/Week_6.md#-exercise)

## 🔙 Recap

- HTML
    - Favicon
    - Class Attribute
- CSS
    - Applying style to each element
- JavaScript - Intro to JavaScript
    - The HTML `<script>` Tag
    - Inline `script.js`

## 📖 This Week
### 🌟🌟Very Important🌟🌟
- HTML
    - Layout Elements and Techniques (div & span tag)
- Link JavaScript
- JavaScript Programming
    - Variables
    - Conditional Statement
    - For loop

## 🦴 HTML
### In order to make a good website, you need to design it well from the beginning so that you don't have to modify it much later. 
> ex) Architectural Design

The design can be like
<p align='center'><img src='https://poiemaweb.com/img/html-layout.png' /></p>

To make this as a code, you need the following tags
### - div tag
```
You can use it to group large sections as a block and can be formatted (Presentation of block) using Style Sheet (CSS) in your document.
```
### - semantic tags
```
Semantic elements of HTML5, the name clearly defines what kind of code it is holding, and it is for which part of the website.
Therefore, it helps you understand what's happening where on the page.
```

- `<article>`
- **`<aside>`**: the portion which is not directly related to the main content.
- `<details>`
- `<figcaption>`
- `<figure>`
- **`<footer>`**: the portion of the end
- **`<header>`**: the portion of the start
- **`<main>`**: main portion
- `<mark>`
- **`<nav>`**: navigation bar
- `<section>`
- `<summary>`
- `<time>`

<p align='center'><img src='https://www.w3schools.com/html/img_sem_elements.gif' /></p>

## 🍊 Link JavaScript (Externally)

### How to link external Javascript file to html file?
- Use `<script src ="..."></script>` tag
`<script>` tag is used to link script which is Javascript to html file.<br />

Put the tag inside the `<head>` tag with `src` attribute in your html file. <br />
For example)

`script.js`


```
function myFunc() {
    alert("You clicked me.")
}
```

`index.html`
```
<!DOCTYPE html>
<html>
    <head>
        <title>example page</title>
        <script src="./script.js"></script>
    </head>
    <body>
        <button onclick="myFunc()">Click me!</button>
    </body>
</html>
```

<img src='./images/javascript_onclick.jpg' />

## 🌟🌟 JavaScript Programming 🌟🌟

- Variables
- Conditional Statement
- For loop (While loop)

### What are Variables?
```
Variables are containers for storing data
```
 for example)
<br />
You can declare variables by using `let` keyword.
> There are other keywords, for example, `var`. But, I recommend don't use this. This is for old web browser.
> You can also delcare variables without using keyword. But, try to declare with `let` keyword.

```
let a = 25; // 25 is stored in 25
let b = 75; // 75 is stroed in 75
let c = a + b; // 25 + 75 is stored in 100
```

> In most of the programming languages, you need to put `semicolon (;)` to indicate that the command is finished.

#### Data Types
- string
> ex) 'John', 'Mike', '5', '4'
- integer
> ex) 1, 2, 3, 4, 10, 9999

```
let myName = 'Kyochul_Jang' // string
let age = 24 // integer
```

> For more information, refer `variables.js`.

### Conditional Statement
#### Boolean Variable
- `true` == 1
- `false` == 0

```
If you want the line of code to be executed conditionally, use `Conditional Statement`.
There are 4 types of Conditional Statement.
```
- `if` Statement
- `else` Statement
- `else if` Statement
> Use `==` operator to compare the values.


#### `if` Statement
```
If the `condition` is `true`,
the `block of code` will be executed.
```
##### Syntax
```
if ([condition]) {
    [block of code]
}
```

#### `else` Statement
```
If the `condition` in the `if` statement is `false`, the `block of code` in the `else` statement will be executed.
```
##### Syntax
```
if ([condition]) {
    [block of code]
} else {
    [block of code]
}
```

#### `else if` Statement
```
If the `condition` in the `if` statement is `false` and the `condition` in the `else if` statement is `true`, run the `block of code` in the `else if` statement.
```
##### Syntax
```
if ([condition]) {
    [block of code]
} else if ([condition]) {
    [block of code]
}
```

for example) <br/>

refer `conditional_statement.js`

### For Loop

```
Loops can execute a block of code a number of times.
```

##### Syntax
```
for ([statement 1]; [statement 2]; [statement 3]) {
  // a block of code
}
```

- statement 1 is often used as initializing iterating variable or declare variable
- statement 2 states the condition. If the condition is true, the `block of code` will be executed. Otherwise, no.
- statement 3 describes how much the iterating value will be increased or decreased.


for example)
```
console.log('hellow world');
console.log('hellow world');
console.log('hellow world');
console.log('hellow world');
console.log('hellow world');
...
...
```
can be done with just three lines of code with using for loop
```
for (let i = 0; i < 5; i++) {
    console.log('hellow world');
}
```
> `i++` means i = i + 1 which means add one to the variable and vice versa.
<br />
<img src='https://github.com/OfficerChul/webDev101/blob/main/Week_6/images/for_loop1.jpg?raw=true'> <br />

#### If you want to print without new lines?
Don't use `console.log()` if you don't want the line feed.
Instead, use `process.stdout.write("...")`.
If you need new line with using process.stdout.write function, put `\n` inside <br /> `process.stdout.write("hellow \n world")` <br />
<img src='https://github.com/OfficerChul/webDev101/blob/main/Week_6/images/for_loop2.jpg?raw=true' />
<br />

#### Nest For Loop
We can have a for loop within the for loop.
<br />
For example)<br />
<img src='https://github.com/OfficerChul/webDev101/blob/main/Week_6/images/nested_forloop.jpg?raw=true' />
<br />

> refer `for_loop.js` for more examples


## 🏠 [Exercise](https://github.com/OfficerChul/webDev101/blob/main/Week_6/exercise/instruction.md#exercise-instruction)