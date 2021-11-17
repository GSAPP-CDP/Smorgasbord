---
moduleid: 143
title: Coordinate Reference Systems & Projections
published: True
slug: coordinates-projections
---
# Coordinate Reference Systems & Projections

## Module Summary

This module covers fundamental concepts related to coordinate reference systems and map projections -- in other words it provides answers to the questions: how do we define location? and how do we represent the round earth on a flat plane?

## Conceptual Introduction

If, as covered in the [previous module](), our operating definition of spatial data is "information tied to a space" then one fundamental aspect of work with spatial data is developing a system for defining the locations of things in space. This is the work of **coordinate reference systems.**  

Most maps are flat, but represent features of our round planet (or of any round planet, see for example [this beautiful map of the moon](https://commons.wikimedia.org/wiki/File:Lunar_Earthside_Map_-_3rd_Edition_-_1976_-_NASA.jpg)). Projected coordinate reference systems use mathematical transformations to allow us to represent the round surface of the planet on a flat plane. 
![Earth in the Goode homolosine projection](images/Earth_2017_02_16_(32802878532).jpg#img-full)


## Coordinate reference systems

A coordinate reference system (CRS) is a method for representing locations in relation to known reference points or to a reference surface.  
![coordinate reference system diagram](images/crs_diagram.png#img-right)

There are two categories of coordinate reference systems: **geographic coordinate reference systems** and **projected coordinate reference systems**

A **geographic coordinate reference system** is a system for defining location in relation to a three dimensional spherical model of the earth’s surface.  

A **projected coordinate reference system** defines a set of transformations for representing the spherical earth on a flat plane. Today, these are always based on a geographic coordinate system.  

![geographic vs projected coordinate reference systems](images/geographic_projected_crs-02.png#img-full)

Geographic coordinate reference systems are in turn always based on a **[geodetic datum](https://en.wikipedia.org/wiki/Geodetic_datum)**, which is a [spheroid](https://en.wikipedia.org/wiki/Spheroid) model of the lumpy planet that is our earth.

## Geographic coordinate reference systems

![lat long definitons](images/globes_plane_rotation-latlng.png#img-full)

Geographic coordinate reference systems use angular units to identify locations on Earth's surface. Latitude and longitude coordinates are the most common system. In units of degrees these measure the angles between the axis of rotation and the equatorial plane formed by an imaginary vector that stretches from the center of the earth to some location on the earth's surface.  

![distance represented by longitude](images/distance-lng.png#img-right)

Parallels of latitude and meridians of longitude form an imaginary grid across the Earth's surface.  

Geographic coordinate systems use an angular system of measurement. **Therefore they do not represent consistent measures of distance on the earth's surface.**  

What does this mean exactly? Consider, at equator the diameter of the parallel of latitude is approximately equal to the diameter of the meridian of longitude. 1° of latitude = 1° of longitude. However as you approach the poles, the diameter of each parallel of latitude gets smaller. So accordingly as you approach the poles, 1° of longitude represents a shorter and shorter distance on the earth's surface. .

## Projected coordinate reference systems
[section not yet completed, needs diagrams & prose description]

Projected coordinate reference systems are mathematical transformations that allow for the representation of the spherical earth on a 2 dimensional surface.  


## Working with coordinate reference systems

In working with spatial data and geographic analysis it is important:

1. to understand that there are differences between geographic and projected coordinate reference systems
2. to be aware of the different types of projections and how they are defined/created
3. to grasp the limitations and abilities of different types of projections.  

Practically, the thoughtful use of spatial data requires that you consider "what is the right coordinate reference system for the project I am about to work on?" This should take into account:

1. Where on the earth's surface is your project located?

2. What is the scale of your project? (what are its spatial extents?)
    - If the project covers a small area (a city, a small-ish region) then there is likely a projected coordinate reference system defined for that area (i.e. one whose standard parallel intersects your area of interest). Perform research to find if such a projected coordinate reference system exists and re-project your data to use this coordinate reference system.
    - If the project covers a large area (think national, continental, global) then you need to consider which type of distortion you hope to minimize and should choose a projected coordinate reference system accordingly. In addition you should select a projected coordinate reference system a whose standard parallel is located in the center of the geographic region covered by your project.

![Blue Marble, NASA, 1972](images/135918main_bm1_high.jpg#img-full)

## Assignment
[might rework this.....]

Locate 3-4 different archival maps that depict an area of your choosing at a few spatial scales. All of the maps should show an area that is smaller than the whole globe, but larger than a city (think: regional or above).  

Identify the coordinate reference system used, either the specific projected coordinate reference system from a citation in the map's legend (if available) or by analyzing the map and inferring the type of projective surface that likely defines the projection.  

Make sure that your example maps do not all use the exact same coordinate reference system.  

Design a series of slides that highlight differences across these depictions which are created by differences in the coordinate reference systems used.  