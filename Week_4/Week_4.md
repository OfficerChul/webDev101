# Week 4

- [Recap]()
- [This Week]()

## 🔙 Recap
- Vim
- GitHub Configuration
- Using GitHub with VsCode
- HTML

## 📖 This Week
- Comment
- HTML
- CSS

## 🗺️ Comment
### One of the most useful programming conventions.
### A comment is a text note added to source code to provide explanatory information

Shortcut for commenting:
On Windows, the shortcut is: `CTRL + /` · On Mac, the shortcut is: `Command + /`.

### Comment Syntax for various Programming Languages

| Programming Languages | Comment Syntax |
| --- | --- |
| C++/Java | //  (two slashes) |
| Shell/Python | # (hash sign) |
| HTML | \<!-- . . . --> |
| Many languages | /* . . . */ |



> For more information about the comment / annotation, click [here](https://geekflare.com/how-to-add-comments/).

## 🛕 HTML

## 🖌️ CSS
### CSS stands for Cascading Style Sheet language.
### It used for describing presentation of document written in markup language such as HTML.

### HTML color codes
HTML color codes are hexadecimal triplets representing the colors red, green, and blue (#RRGGBB).
> ex) `#FF0000` <- this is red

### Syntax
```
[selector] { [property]: [value] }
```
ex)
```
h1 {color: #36CFFF}
```

- **selector**: A selector is an HTML tag at which a style will be applied.
- **property**: A property is a type of attribute of the HTML tag.
- **value**: A value is a "style", like how are you going to change its style.

### How to apply the CSS file to HTML file
There are two ways to apply
1. inline CSS
2. external CSS

### inline CSS
Putting CSS code inside of the HTML `<head>` tag using `<style>` tag.

#### Example for inline CSS
```
<!DOCTYPE html>
<html>
   <head>
      <title>CSS Tutorial</title>
      <!-- CSS starts! -->
      <style>
      h1 {
        /* Change font color */
         color: #36CFFF; 
      }
      </style>
   </head>	
   <body>
      <h1>Hello World!</h1>
   </body>	
</html>
```
### external CSS
Write CSS code in the file with `.css` extension. Normally, people use `style.css` as the name of CSS file. Link the CSS file and HTML file by using `<link>` tag in the `<head>` tag.

#### Example for external CSS



## 🏠 Assignment