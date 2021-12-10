---
moduleid: 115
title: Motion // Movement: Animation with CSS and JavaScript
published: True
slug: intro-to-animation
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

# Interactive Web: Intro to Animation

## Module Summary

## Why is this important?

## Animation Basics
Animation can be accomplished in several ways, but the most common are either binary transitions or keyframe animations that modify an element through a predetermined timeline. These are typically triggered by a state change — either the page loading, an element being selected, or hovered upon.

## Why Use Animation?

## 2D Transforms
Transforms are static — immediately changing the targeted element and causing it to stay that way. There are four main types of transformations: rotate, translate, scale and skew.

### Rotate
The rotate value provides the ability to rotate an element from 0 to 360 degrees. Using a positive value will rotate an element clockwise, and using a negative value will rotate the element counterclockwise.

[add image here]

```css
.square {
  transform: rotate(-30deg);
}
```

[add image here]

```css
.square {
  transform: rotate(-30deg);
  transform-origin: bottom left;
}
```

### Translate
The translate value works a bit like that of relative positioning, pushing and pulling an element in different directions. Using the translateX value will change the position of an element on the horizontal axis while using the translateY value will change the position of an element on the vertical axis.

[add image here]

```css
.square {
  transform: translate(40px 20px);
}
```

[add image here]

```css
.square {
  transform: translateX(100px);
}
```

[add image here]

```css
.square {
  transform: translateY(100px);
}
```

### Scale
Using the scale value within the transform property allows you to change the appeared size of an element. It’s also possible to scale only the height or width of an element using the scaleX and scaleY values.

### Skew
Skew, is used to distort elements on the horizontal axis, vertical axis, or both. To distort an element on both axes the skew value is used, declaring the x axis value first, followed by a comma, and then the y axis value.

### Putting it all Together
Transforms are applied to the element in the order they are listed.

```css
.square {
  transform: scale(0.7, 1.5) rotate(30deg) skewY(-15deg) translate(200px, 20%);
}
```

## Using SVGs in Animation
Scalable Vector Graphics or SVG is a 2D vector image format that scales to look sharp at any resolution. SVG and HTML are peers, and this means that SVG is just as easy to modify and manipulate with CSS.

To create an SVG, you can use design tools like Illustrator or Sketch. You can also write SVG directly using the text editor of your choice.

Any transformation or transition animation that can be applied to an HTML element can also be applied to an SVG element.

### Drawing
First, create a new regular web document:

[add image here]

First step’s first — drawing. Size the artboard. Position the images on the artboard as it would look in the first frame of the animation. Separate the parts of your drawing into layers and groups (like you would in Photoshop), especially if any of them are going to be animated.

If you’ve added text with the Text Tool, convert them into outlines. Select the text, then from the menu, `Type > Create Outlines`.

### SVG
From Illustrator: `File > Save As...` and select SVG (svg) from the Format dropdown.

[add image here]

Open the SVG file in your text editor — you’ll notice the markup has the names of the layers and groups you created in Illustrator as ids. This is extremely helpful when identifying the elements of your illustration.

### HTML
Copy the markup between (and including) `<svg>` and `</svg>` and drop it into your HTML. Here’s the raw SVG for you to work with (view source):

[add image here]

Clean up the markup. The `<g>` element represent a group of paths—treat them like you would a `<div>`. I’d suggest things like converting id names to class names and declaring the fill color in the CSS.

Before you clean up the markup, you may want to run the SVG through an optimizer like [SVGO]() or [SVG-Optimiser]().

Wrap the SVG in a container:

```html
<div class="svg-container">
  <svg class="bug"></svg>
</div>
```

### CSS
The beautiful thing about SVG is that its infinitely scalable irrespective of screen size and pixel density — a wonderful thing for responsive web design. Make the SVG responsive:

```css
.bug {
  width: 100%;
  height: auto;
}
```
You can also set the fill value of the svg's path element in CSS, like you would any other attribute.

```css
.bug path {
  fill: #000;
}
```

## Transitions
Transitions allow you to alter the appearance and behavior of an element whenever a state change occurs. You’ll commonly see the transition property used on `:hover` and `:focus` states.

With transitions you determine the start and end state, the computer handles the tweening (the states in between the beginning and the end); tweening is a term from animation.

```css
.example {
  transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
}
```
There are two ways to trigger CSS transitions:

1. Using the `:hover` CSS pseudo-class
2. Adding a class with JavaScript

So, if we were trying to write a transition rule that smoothly changes the background color over 2 seconds starting 1s after the action that causes the transition, we’d write:

## Animations
Animations are similar to transitions, in that they make properties change over time, but they give us more control over how those changes happen.

### What is a keyframe?
Keyframes are a common animation concept, usually found in hand-drawn animation. In web-based animations, keyframes represent the beginning, ending, or midpoint state of the element being animated. The transition property allows us to define a beginning and end point for a state change. However, sometimes you'll want to have an element move through multiple states during an animation. That's where the CSS keyframes rule comes in. Keyframe syntax uses `@`.

[add image here]

What if we want to create an animation that causes an element to bounce into the browser.

```css
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
```
First, we create a keyframe with the animation name, bounceIn. Then, apply the animation rule to the CSS element you want animated.

```css
.square {
  animation: bounceIn 3s ease-in-out;
}
```

## Conclusion
CSS Animations are easy and mostly compatible, so they’re often a good choice for basic animation needs. For anything more complex, such as animation that depends on user input, you’ll need to use Javascript.