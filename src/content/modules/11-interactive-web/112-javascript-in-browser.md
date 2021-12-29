---

moduleid: 112
title: Javascript in the Browser I
published: True
slug: javascript-in-browser

---

===========================================

# Interactive Web: Weather UI Design

### Set Up Your HTML Project

1. Set up a new project using a text editor, like [Visual Studio Code]() a free code editor available for Mac, Windows, or Linux.
2. Open up a new project folder and name it `weather-app`. To create a new project folder in Visual Studio Code, navigate to the “File” menu item in the top menu and select “Add Folder to Workspace.” In the new window, click the “New Folder” button and create a new folder called `weather-app` as illustrated in the gif below:

[add gif here]

Inside that folder, create this recommended project structure:

```md
weather-app
├── index.html
├── styles
│   └── style.css
└── javascript
    └── main.js
```

In your blank `index.html` file, set up the bones for what will be your weather application.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- your code goes in here -->
</body>
</html>
``` 

### Start with the basic layout of the page

This is what we're going to be building:

![html-image](images/111/111-08.png)

The following elements go in between the body tags.

```html
<div class="container">
  <div class="input_component">
    <form>
      <input type="text" class="zipcode" placeholder="type zipcode here">
      <button type="button" class="search-button">Search</button>
    </form>
  </div>
  <div class="output_component">
    <h2 class="city_name"></h2>
    <p class="temperature"></p>
  </div>
</div>
```

### Style the layout

First, let's use the universal selector property to strip all the elements of their inherent margins and padding.

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Next, we'll set the height of the html element to 100% as well. Body looks to its parent (HTML) for how to scale the dynamic property, so the HTML element needs to have its height set as well. This will give our layout a nice snug fit with the browser window.

```css
html,
body {
  height: 100%;
  background-color: #141414;
}
```
Now, we need to center the input and button in the browser window. There are a couple ways we can accomplish this; but for the sake of simplicity we will use flexbox.

```css
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
}
```

Note: we've added the `display: flex` property to the form element because we want the button to sit snugly next to the input field.

### Style the elements

Finally, we style the input field and the search button.

```css
input[type="text"] {
  width: 100%;
  height: 40px;
  border: none;
  text-align: center;
}

input::placeholder{
  color: #141414;
}

.search-button {
  color: #f4f4f4;
  background-color: #141414;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #f4f4f4;
}
```

### Style the data appended to  the DOM

```css
.output_component{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.city_name, .temperature{
  text-align: center;
  font-size: 3em;
  line-height: 1.2em;
}
```