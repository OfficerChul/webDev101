# Week \#

- [Recap]()
- [This Week]()
- [Exercise]()

## 🔙 Recap

- HTML
    - Layout Elements and Techniques (div & span tag)
- Link JavaScript
- JavaScript Programming
    - Variables
    - Conditional Statement
    - For loop

## 📖 This Week

- HTML
    - Layout Elements and Techniques (div & span tag)
- CSS 
    - Unit (Absolute Lenghts vs Relative Lengths)
    - Grid, Flexbox
    - Apply style to `div` and `semantic` tag
- Programming (JavaScript)

## 🦴 HTML
### In order to make a good website, you need to design it well from the beginning so that you don't have to modify it much later. 
> ex) Architectural Design

The design can be like
<p align='center'><img src='https://poiemaweb.com/img/html-layout.png' /></p>

To make this as a code, you need the following tags
### - div tag
```
1. You can use it to gather large sections as a block and group similar content together so that you can organize and style it easily.
2. (Presentation of block) using Cascading Style Sheet (CSS) in your document.
3. Div tag can also be used not only to group similar content, but also make the code be organized.
```

### - semantic tags
```
Semantic elements of HTML5, the name clearly defines what kind of code it is holding, and it is for which part of the website.
1. Therefore, it helps you understand what's happening where on the page.
2. It helps the website to have a better accessibility and Search Engine Optimization (SEO).
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

### The best way to organize your website is to use both `div` tags and `semantic` tags. Try to use `semantic` tag first. If there is no content that matches `semantic` tags, then use `div` tags as alternatives.

```
html_example.html
```

```
<!DOCTYPE html>
<html>
    <head>
        <title>example page</title>
        <link rel='stylesheet' href="css_example.css"></link>
    </head>
    <body>
        <header>
            <h2 class = 'logo'>Officer Chul's Website</h2>
            <nav>
                <ul class = "nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div class="home">
            <h1>Home</h1>
        </div>
        <div class="about">
            <h1>About</h1>
        </div>
        <div class="services">
            <h1>Services</h1>
        </div>
        <div class="contact">
            <h1>Contact</h1>
        </div>
        <footer>
            <h5 class="closing">Thank you for vising my website.</h5>
        </footer>
    </body>
</html>
```

## 👚 CSS 

### Unit

#### Absolute Lengths vs Relative Lengths

#### Absolute Lengths

```
Absolute lengths are the units which are fixed and has the exact size.
It is not recommended to use if you don't know which screen will be used, because the size of picture with those units will not be change with vary size of the screen.
```

<p align='center'><img src="./images/unit_abs.jpg" /></p>
<p align='center'>https://www.w3schools.com/cssref/css_units.asp</p>

#### Relative Lengths

```
Relative Lengths shows different size which depends on the size of other components.
```

<p align='center'><img src='./images/unit_rel.jpg' /></p>
<p align='center'>https://www.w3schools.com/cssref/css_units.asp</p>


### Flexbox


## 🏠 Exercise