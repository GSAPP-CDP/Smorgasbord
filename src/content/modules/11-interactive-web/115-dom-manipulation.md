---
moduleid: 115
title: "DOM Manipulation"
published: True
slug: dom-manipulation
authors:
 - "Celeste Layne"
---

# JavaScript in the Browser - DOM Manipulation

* Duration: 1 hour

The user interface is the part of a computer and its software that people can see, hear, understand or direct. The user interface has two components: input and output. The input is how a user communicates their needs to the computer. Some common input components are keyboard, mouse or voice. The output is how the computer conveys the results back to the user; this is usually done through the display screen.

Before we continue building out our widget, let's consider how do we want people to interact with it. The wireframe is a great tool to illustrate how the user interfaces with our application. Most wireframes are free of any color or visual design elements, and simply show boxes and lines with notations to outline user interactions.

Wireframes will look different depending on who creates them, but they should always include details about the functionality. If building a website or application was like building a house, wireframes would be considered the blueprint. They're an important element of communication between design and web development.

[add wireframe here]

Recall from the first module, we start with a simple layout containing two sections: `input-container` and `output-container`. The `input-container` includes a form with an input field where a user will type in their zipcode and a submit button that makes the request for the current weather to the weather service. The `output-container` will include the name of the city and current temperature.

### The Document Object Model (DOM)

```html
<div class="container">
  <div class="input-container">
    <form>
      <input type="text" class="zipcode" placeholder="type zipcode here">
      <button type="button" class="search-button">Search</button>
    </form>
  </div>
  <div class="output-container">
    <h2 class="city_name"></h2>
    <p class="temperature"></p>
  </div>
</div>
```

#### Accessing HTML Elements

When it comes to using JavaScript to manipulate to DOM, there are usually two types of elements someone would need to deal with, __existing__ and __non-existing__. Here, the existing elements (input field and button) are located in the `input-container` and the non-existing elements are located in the `output-container`. In this module, let’s look at accessing and manipulating __non-existing__ elements.

In the `index.html` file we have two elements that we will use to render the information we return from the API:

```html
<h2 class="city_name"></h2>
<p class="temperature"></p>
```

#### Getting

To use the `querySelector` method, we first need to reference the document object (where the method lives). Then, we pass in a CSS selector for the element we want to retrieve from the DOM. The element that we get back will be the first element that matches that selector.

Similar to the input and button elements, in the `main.js` file  we will select the `h2` element which has a `city-name` class name to render the name of the city to the DOM and the `p` element which has a `temperature` class name to render the temperature.

```js
let CITY_NAME = document.querySelector(".city-name");
let CITY_TEMP = document.querySelector(".temperature");
```

#### Manipulating Elements

Now that we know how to get elements from the DOM, it’d probably be helpful to learn what we can do with them.  Toggle, add or remove classes, change their styling, animate them, move them from one part of the page to another, replace their content with new content, etc. The list goes on!

#### Content

We want to change the text content in the CITY_NAME and CITY_TEMP elements. We will use `textContent` node property to reset the text and interpolate data in to it. Recall, we've already stored the weather data to a variable called, local_weather_data.

```js
const getWeatherData = () => {

  fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(data => {
    // store the data in a variable
    let local_weather_data = data;
    console.log(local_weather_data)
  });
}
```

Within the `local_weather_data` variable, there is an object that contains information we want to access about the zipcode: city name, humidity, temperature, and description to name a few. To access the city name and temperature, we will use dot notation:

```js
const getWeatherData = () => {

  fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(data => {
    // store the data in a variable
    let local_weather_data = data;

    CITY_NAME.textContent = local_weather_data.name;
    CITY_TEMP.textContent = local_weather_data.main.temp;
  });
}
```

A quick `console.log()` will show that the temperature is returned in Kelvin; therefore, we need to convert it to celsius. The formula for converting kelvin to celcius is `Math.round(K - 273)`. Substitute the `K` for `local_weather_data.main.temp` and set that equal to a variable that can be used later.

```js
let weather_in_celsius = Math.round(
  local_weather_data.main.temp - 273
);
```

Update `CITY_TEMP.textContent` with the result of the `weather_in_celsius` variable:

```js
CITY_TEMP.textContent = weather_in_celsius + " C"
```

### Putting it all togehter

```js
// access elements in the DOM
let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

// write a function to get weather data
  const getWeatherData = (zip) => {
  // store your open weather API Key
  const API_KEY = "[YOUR API KEY HERE]";
  // store the API endpoint and API key
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      // store the requested data in a variable
      let local_weather_data = data;
      // manipulate the city name content
      CITY_NAME.textContent = local_weather_data.name;
      // process the temperature data before manipulating the content
      let weather_in_celsius = Math.round(
        local_weather_data.main.temp - 273
      );
      // manipulate the temperature content
      CITY_TEMP.textContent = weather_in_celsius + " C"
  });
}

const getZipcode = e => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

btn.addEventListener('click', getZipcode);
```

### The Reset

After the request to the weather service, clear the value of the input field, give focus to the input field:

```js
  form.reset();
  input.focus();
```

Make sure to place the resets inside the `getWeatherData()` function but outside the fetch logic.

### Bonus - Weather Icon

![open weather map icon](images/111/111-20.png)

Let's construct the icon URL and display it in the `output-container` using an `img` tag:

1. In the `index.html` file add a basic image tag

```html
<img src="" alt="">
```

2. In the `main.js` file, target the image tag:

```js
let image = document.querySelector("img");
```

3. Inside the `getWeatherData` function, store the icon in a variable:

```js
const getWeatherData = (zip) => {
  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
    
      let WEATHER_ICON = new_york_weather_data.weather[0].icon

  }
}
```

4. The `img` tag has an `src` attribute. Set data using the `setAttribute` method:

```js
let image = document.querySelector("img");

const getWeatherData = (zip) => {
  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let WEATHER_ICON = new_york_weather_data.weather[0].icon
      
      image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
  }
}
```

## Challenge

Submit your progress to the cloud via GitHub Desktop. Forgot how? 

Open GitHub Desktop. Newly written code is rendered in green while deleted code is rendered in red. In the bottom left corner of the application window, type the following message:

```md
DOM Manipulation# replace Create index.html
Interactive Web submission # replace Description
```