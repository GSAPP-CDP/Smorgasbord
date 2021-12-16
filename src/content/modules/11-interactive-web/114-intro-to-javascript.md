---
moduleid: 114
title: Intro to JavaScript
published: True
slug: intro-to-javascript
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

# Interactive Web: Intro to JavaScript

## Module Summary

## Why is this important?

## What is JavaScript?
JavaScript is a scripting language that enables you to add interactivity to websites — dynamically updating content, control multimedia, animate images and 2D/3D graphics, and interact with the user. Alongside HTML and CSS, JavaScript is one of the core technologies of the web.

These three languages enable you to create complex and dynamic web pages.

### Why JavaScript?
JavaScript was built for front-end interaction, so it’s perfect for a designer. But now it’s also used on back-end interaction, so the syntax is familiar.

### What Can You Do With JavaScript?
1. Access Content
2. Modify Content
3. Program Rules
4. React to Events
5. Smooth No Refresh User Experience
6. Communicate with a Server

### JavaScript Syntax

### JavaScript in the console

### Data Types

#### Number
The _number_ type represents both integers (whole numbers) and floating point numbers (decimals). To type a number into the console, just enter numerals without quotes. If you enter a number into the console, you’ll get that number back.

```js
2         // integer
1039.6418 // when a number has a decimal it is called a float  
```

#### String
Strings are collections of letters and symbols known as characters, and we use them to deal with words and text in JavaScript. Strings must be surrounded by quotes and will work accordingly as long as they match. In JavaScript, there are 3 types of quotes.

1. Double quotes: "Hello".
2. Single quotes: 'Hello'.
3. Backticks: `Hello`.

```js
'New York' // this will work
"Columbia University" // this will work
"123' // this will not work
```

#### Boolean
Boolean represents one of two values: `true` or `false`. Sometimes you’ll need to solve problems by adopting this same type of reduced true or false logic, such as with conditionals.

```js
let n = false;

if (n) {
	// this code will not run
}
```

#### Object

```js
let artist = {name: 'Frida', occupation: 'artist' }
```

```js
artist.name // 'Frida'
artist['occupation'] // 'artist' }
```


### Array
Arrays are a data structure similar in concept to a list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, they can dynamically grow and shrink in size.
Items in an array are stored in sequential order, and indexed starting at 0 and ending at length — 1

Arrays are great for:
1. Storing data
2. Enumerating data, i.e. using an index to find them
3. Quickly reordering data

#### Getting data from an array
To access, or retrieve, a value from an array, we will use the array name, followed by the index number, wrapped in square brackets.
Let’s take a look at some examples:

#### Updating a value in an array
To update the value of an element in an array, specify the index number of the position where the updated value should be added.

```js
let colors = ["Red", "Orange", "Yellow", "Green"];

colors[0] = "Blue"; // Update the value at index 0
```

Here we are replacing "Red" with "Blue". The colors array now looks like this:

```js
["Blue", "Orange", "Yellow", "Green"]
```

### Array Helper Methods
In addition to containing multiple elements, arrays also have a number of other built-in methods that give them useful abilities. These are called array helper methods.
Let’s take a look at some of them:

#### push()
The push() method allows you to add one or more items to the end of an array.

#### pop()
The pop() method is useful when you want to remove the last item in an array.

#### reverse()
You can reverse the order of elements in an array with the reverse() method.

#### join()
The join() method joins all elements of an array into a single string. The join() method accepts an optional argument (the separator), which becomes a string that separates the array values. In this case, white space.

### Operators

### Conditionals


### Functions
Function is a term that comes out of mathematics. You may remember hearing it in your high school algebra class. The basic idea of a function is simple — it’s a relationship between a set of inputs and a set of outputs.

#### What is a function?
A function is a block of code that returns a result. Think of a function like a box that isn’t aware of the outside world. It only knows what you tell it and when you ask it something (run or call), it will reply with an answer. Functions make it easier to maintain and reuse functionality within an application.
1. Fundamental component of JavaScript
2. A reusable block of code used to perform a task
3. Simply put, a block of code that takes an input, processes that input and produces some form of output

#### Why use functions?


#### Anatomy of a functions?

### Loops

### Objects