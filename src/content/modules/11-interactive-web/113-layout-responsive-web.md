---
moduleid: 113
title: Layout and Responsive Web
published: True
slug: layout-responsive-web
authors:
 - "Celeste Layne"
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

# Interactive Web: Layout & Responsive Web

## Module Summary

## Why is this important?

## Normal Flow
Normal flow is where you begin with any layout. In the normal flow, text elements are laid out from top to bottom, and from left to right in left-to-right reading languages (or from right to left in right-to-left reading languages). This is the default behavior of the web browser.

In the normal flow, block-level elements stack on top of one another and inline elements fill the available space.

## Display

## Positioning
In CSS positioning, blocks are defined as being either in the normal flow or removed from the normal flow. It’s a way to build complexity into your page layout. Floating and positioning elements allow you to change their relationship to the normal flow.

### Static Positioning
The default value of every element is static. A static object receives its layout rules from properties such as display and float, and is considered an ‘un-positioned’ element. Any element that has a value other than static is referred to as a ‘positioned’ element.
You rarely explicitly declare position:static like this because it is the default.

[add image here]

### Relative Positioning
Using position: relative allows you to position an element within the document flow in relation to where it would normally occur. For example, let’s place two divs on our page and view them in their natural document flow:

[add image here]

### Absolute Positioning
Specifying position: absolute removes the element from the document and places it exactly where you tell it to be.
An element that has been styled with position: absolute will remove that element from the rest of the document flow, and position it in relation to the closest positioned element. If there are no other positioned elements on the page, the absolute element will use the <body> as a reference object.
Because position: absolute elements work in tandem with other positioned elements, you must set the reference element to position: relative. Let’s look at an example.

[add image here]

### Fixed Positioning
A fixed element is not only removed from the document flow, but also stays in its position as the user scrolls on the page. A common fixed element is the nav. Let’s see it in action. Here’s the nav in its natural flow of the document:

[add image here]

## Responsive Design
“Responsive Design” is the strategy of making a site that “responds” to the browser and device that it is being shown on… by looking awesome no matter what.

### Meta tag

### Fluid Layout

### Fluid Images

### Media Queries
In order to have your content fit the screens of different devices automatically, we need to use media-queries. Media queries are conditional style rules for the size of the web browser or device (mobile, tablet, watch etc) rendering the site.

[code snippet]

Here, all the p tags will be red until the screen size reaches 600px, at which point they’ll turn blue. How do we determine the pixel width to use in the media query?

#### Breakpoints
CSS breakpoints are points where the website content responds according to the device width, allowing you to show the best possible layout to the user. In the previous example, the breakpoint means the CSS will apply when the device width is 600px and above.
