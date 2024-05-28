---
moduleid: 160
title: Introduction to Web Mapping with Mapbox
published: True
slug: web-mapping
authors:
 - "Adam Vosburgh"
 - "Dare Brawley"
---

# Sequence: Introduction to Web Mapping with Mapbox

## Sequence Summary

This tutorial is an introduction to making web maps using [Mapbox GL JS](https://www.mapbox.com/mapbox-gl-js/api/). This is a  javascript library that uses [WebGL](https://en.wikipedia.org/wiki/WebGL) to render interactive maps from vector tiles (as opposed to raster tiles) created with [Mapbox Studio](https://www.mapbox.com/mapbox-studio/). Data for these maps comes from [OpenStreetMap](https://www.openstreetmap.org).

This tutorial will introduce you to the basic setup and what it feels like to develop for a web browser, how to add datasets, and then how to make those datasets interactive. This will be a very different approach than your experience thus far in QGIS, and it is much more prone to error given the number of new concepts and syntaxes involved. Brackets, commas, quotes, and colons... stay with it—it's ok if you don't understand what everything is doing at first.

## Modules

- Webmaps Part 1 - Setting up Github and Mapbox
- Webmaps Part 2 - Making a Basic Webmap
- Webmaps - Scrollytelling Map


## Modules overview/sequence

- **Webmaps Part 1 - Setting up Github and Mapbox**  
    In this module you will complete the required setup for a webmap - in this case setting up a github repository to host your code, and making a mapbox account to get your API key to access their map servers.
- **Webmaps Part 2 - Making a Basic Webmap**
    In this module you will make your first webmap using data from Mapping Where. TO do this, we export a geojson from QGIS, and add it to your webmap. From there, we will put in a bit of interactivity.
- **Webmaps - Scrollytelling Map**  
    This module will show you how to create an interactive map that styles and zooms according to a user scrolling on a webpage - similar to ones found in online publications such as the New York Times.