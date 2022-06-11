# Week 4

- [Recap](https://github.com/OfficerChul/webDev101/blob/main/Week_4/Week_4.md#-recap)
- [This Week](https://github.com/OfficerChul/webDev101/blob/main/Week_4/Week_4.md#-this-week)
- [Comment](https://github.com/OfficerChul/webDev101/blob/main/Week_4/Week_4.md#%EF%B8%8F-comment)
- [HTML](https://github.com/OfficerChul/webDev101/blob/main/Week_4/Week_4.md#-html)
- [CSS](https://github.com/OfficerChul/webDev101/blob/main/Week_4/Week_4.md#%EF%B8%8F-css)
- [Exercise](https://github.com/OfficerChul/webDev101/blob/main/Week_4/Week_4.md#-exercise)

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

### HTML attribute
Attributes provide additional information about elements and are always specified in the start tag.

- `href(Hypertext REFerence)` attribute: specifies the URL of the page the link goes to
> `<a href="https://kyochul-website.netlify.app/">Kyochul Jang's website</a>`
- `src` and `alt` attribute
> `<img src="https://kyochul-website.netlify.app/static/media/logo.1913bc354a8f0f32dd0c.png" alt="Kyochul's Logo" />`
- `lang` attribute
> `<html lang="kr">`<br />
> `<html lang="en">`
- single quotation and double quotation
> `<a href="https://kyochul-website.netlify.app/">Kyochul Jang's website</a>` and `<a href='https://kyochul-website.netlify.app/'>Kyochul Jang's website</a>` are the same thing.

### Example
`index.html`

```
<!DOCTYPE html>
<html>
    <head lang = 'en-US'>
        <title>HTML example</title>
    </head>
    <body>
        <img src="https://kyochul-website.netlify.app/static/media/logo.1913bc354a8f0f32dd0c.png" alt="Kyochul's Logo" />
        <br />
        <img src="" alt="Kyochul's Logo" />
        <br />
        <a href='https://kyochul-website.netlify.app/'>Kyochul Jang's website</a>
    </body>
</html>
```
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

#### Example
`inline_example.html`

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

#### Example

`external_example.html`

```
<!DOCTYPE html>
<html>
   <head>
      <title>CSS Tutorial</title>
      <!-- Liking css file to this document which is HTML -->
      <link rel="stylesheet" href = "style.css" />
   </head>	
   <body>
      <h1>external_example</h1>
   </body>	
</html>
```

`style.css`

```
h1 {
    /* Change font color */
     color: #36CFFF; 
  }
```

- Normally, we name css file as `style.css`.
- `rel="stylesheet"` is for linking css file to the HTML file.
- These two file should be in the same path.

## 🏠 [Exercise](https://github.com/OfficerChul/webDev101/blob/main/Week_4/exercise/instruction.md)