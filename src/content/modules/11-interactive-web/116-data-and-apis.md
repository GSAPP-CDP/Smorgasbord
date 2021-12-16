---
moduleid: 116
title: Data and APIs
published: True
slug: data-and-apis
---

===========================================

# Sequence: Interactive Web
## Sequence Summary:
## Why?
## Modules:
* History of the Internet and Web
* Introduction to HTML and CSS
* Navigation
* Layout & Responsive Web
* Intro to JavaScript
* Motion: Animation with CSS and JavaScript
* Functions: Little Programs

# Interactive Web: Data and APIs

## Module Summary

## Why is this important?

## Data formats

## Structure of data

### JSON
JSON stands for “JavaScript Object Notation” and has become a universal standard for serializing native data structures for transmission. It is light-weight, easy to read and quick to parse.

#### The Structure of JSON

```js
{
  "users": [
    { "name": "Carl", "id": 536 },
    { "name": "Heather", "id": 857 }
  ]
}
```

Note: JSON is a serialized format. While it may look like an object, it needs to be parsed so we can interact with it as a true Javascript object.

#### Parsing JSON
JSON is the standard format to orgranise data for servers to send and receive data. It’s so popular that JS has two methods to package it for sending and receiving:

* JSON.stringify()
* JSON.parse()

### CSV

### XML

## How to use JSON data

### Internal

### External

## APIs

### What is an API?
API stands for “Application Program Interface” and is a service that provides raw data for public use. The term now commonly refers to web URLs that can be accessed for raw data.

APIs publish data for public use. This lesson walks through how to obtain data on the client side and then render it to the web browser.

### How is an API Used?

### Where Do We Find APIs?
APIs are published everywhere. Chances are good that most major content sources you follow online publish their data in some type of serialized format. Here are a few examples:

* Weather
* NYC Open Data
* City of Chicago
* The New York Public Library Digital Collections API
* Cooper Hewitt, Smithsonian Design Museum Collections

### Why Just Data?
Sometimes thats’s all we need. For those times, we want a concise format.

## Making an API Call

### URLs

### Constructing the URL
We can use string concatenation or string templating to add the right ISBN to the URL, and then locate information about that book:

Paste the below URL into your web browser and take a look at the JSON object that is returned:

You can see that we have an array named “items.” This array contains a JSON object:

Within that object, there is an object named "volumeInfo" that contains information we want to access about the book: a title, description, thumbnail, and preview link.

To access the title in this array, we can use the following syntax:

### Getting Data from an API with JavaScript Fetch
Now that we know more about the URL, we’ll use that information to make the API call and receive data. Let’s dig into the JavaScript using a basic fetch request:

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and returns a promise containing the response. This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the `json()` method.

## Tutorial — Making an API Call
Let’s take a look at an API that has very clear documentation — [OpenWeatherMap]() — and then practice looking through that documentation and making API calls. In order to use it, please follow these steps:

### Instructions
1. Sign up for a free Open Weather Map account.
2. Once you’ve signed up, you’re given an API key. Copy that API key and keep track of it somewhere. Create a variable in your JavaScript file to store the key. e.g. let API_KEY = “”;
4. Go to OpenWeatherMap and scroll down, you’ll see a section that says “API Documentation.”
5. Construct the URL endpoint that could be used for an API call.
6. Make sure you’re getting back the URL you need by placing a console.log statement to log the response received from the server.
7. Finally, write the fetch request to get the full response from the URL endpoint and wrap it in a function called getWeatherData.

```js
const getWeatherData = () => {
  // fetch request goes in here :-)
}
getWeatherData()
```

## Looking at Documentation
There are no rules governing how to write documentation for an API, so its content is presented differently each time. Knowing how to quickly find key pieces of information is the most important part of reading API documentation.

[add image here]

### API Keys
While the majority of APIs are free to use, many of them require an API “key” that identifies the developer requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

When we click on the “How to Start” link, we are taken to a page that provides us with information on how to get an API key. For security reasons, many APIs require the use of keys.

An API key is like a signature that uniquely identifies a user. This helps APIs keep track of their traffic and monitor any suspicious activity, such as an individual user sending too many requests.

For example, malicious users might try using multiple usernames until they find one that works. Keys can help prevent these kinds of attacks by limiting how many requests one user can make.

OpenWeatherMap’s documentation makes it easy for us to obtain an API key. We simply click the “Sign Up” button and create an account, and then you can get an API key.

To make an API call, we’ll need to add our key to the URL:

```js
http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
```

Now that we have our key, let’s look back at some of the other information the API documentation can provide. Spend a few minutes exploring the documentation. See what different types of data you can get from the API.

## Tutorial
Add a feature to your website that changes the background based on the weather e.g. background color, gradient, image, shapes etc.