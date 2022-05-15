---

moduleid: 113
title: Layout and the Responsive Web
published: True
slug: layout-responsive-web

---

===========================================

# Sequence: Interactive Web
## Sequence Summary:
## Why?
## Modules:
* History of the Internet and Web
* Introduction to HTML and CSS
* 

# Interactive Web: Layout and the Responsive Web

## Normal Flow
Normal flow is where you begin with any layout. In the normal flow, text elements are laid out from top to bottom, and from left to right in left-to-right reading languages (or from right to left in right-to-left reading languages). This is the default behavior of the web browser.
In the normal flow, block-level elements stack on top of one another and inline elements fill the available space.

## Display

## Positioning
In CSS positioning, blocks are defined as being either in the normal flow or removed from the normal flow. It’s a way to build complexity into your page layout. Floating and positioning elements allow you to change their relationship to the normal flow.

### Relative Positioning

### Absolute Positioning

### Fixed Positioning

## Responsive Design

Responsive design involves:

* meta tag
* fluid layout
* relative units
* fluid images
* media queries

### Media Queries
In order to have your content fit the screens of different devices automatically, we need to use media-queries. Media queries are conditional style rules for the size of the web browser or device (mobile, tablet, watch etc) rendering the site.

```css
p {
  color: blue;
}
@media screen and (min-width: 600px) {
  p {
    color: red;
  }
}
```
Here, all the p tags will be red until the screen size reaches 600px, at which point they’ll turn blue. How do we determine the pixel width to use in the media query?

## Common Responsive Layout Techniques

* collapsed menu
* collapsed columns
* Scaled type sizes
* Adjusted line-height
* Adjusted paragraph widths (measure)
* Adjusted image sizes