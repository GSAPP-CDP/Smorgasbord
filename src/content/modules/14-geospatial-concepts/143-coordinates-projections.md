---
moduleid: 143
title: Coordinate Reference Systems & Projections
published: True
slug: coordinates-projections
---
# Coordinate Reference Systems & Projections

## Module Summary

This module covers fundamental concepts related to coordinate reference systems and map projections -- in other words it provides answers to the questions: how do we define location? and how do we represent the round earth on a flat plane?

## Conceptual Introduction, or: Why is this interesting / important?

If, as covered in the previous module, our operating definition of spatial data is "information tied to a space" then one fundamental aspect of work with spatial data is developing a system for defining the locations of things in space. This is the work of **coordinate reference systems.**  

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

![lat long definitons](images/globes_plane_rotation.png#img-right)

Geographic coordinate reference systems use angular units to identify locations on Earth's surface. Latitude and longitude coordinates are the most common system. In units of degrees these measure the angles between the axis of rotation and the equatorial plane formed by an imaginary vector that stretches from the center of the earth to some location on the earth's surface.  

![lat lng angle](images/globes_lat_lng.png#img-left)

Parallels of latitude and meridians of longitude form an imaginary grid across the Earth's surface.  

Important note to keep in mind: geographic coordinate systems use an angular system of measurement. Therefore they do not represent consistent measures of distance on the earth's surface.  

What does this mean exactly? Consider, at equator the diameter of the parallel of latitude is approximately equal to the diameter of the meridian of longitude. 1° of latitude = 1° of longitude. However as you approach the poles, the diameter of each parallel of latitude gets smaller: so 1° of longitude represents a shorter and shorter distance on the earth's surface as you approach the poles.  

![distance represented by longitude](images/distance-lng.png#img-right)

## Projected coordinate reference systems

[to be added]

## Working with coordinate reference systems

In working with spatial data and geographic analysis it is important to be aware conceptually; (1) of the differences between geographic and projected coordinate reference systems; (2) to have a general understanding of the different types of projections; (3) to grasp the limitations and abilities of different types of projections.  

Practically, the thoughtful use of spatial data requires that you consider "what is the right coordinate reference system for the project I am about to work on?" This should take into account:

1. Where on the earth's surface is your project located?

2. What is the scale of your project? (what are its spatial extents?)
    - If the project covers a small area (a city, a small-ish region) then there is likely a projected coordinate reference system defined for that area (i.e. one whose standard parallel intersects your area of interest). Perform research to find if such a projected coordinate reference system exists and re-project your data to use this coordinate reference system.
    - If the project covers a large area (think national, continental, global) then you need to consider which type of distortion you hope to minimize and should choose a projected coordinate reference system accordingly. In addition you should select a projected coordinate reference system a whose standard parallel is located in the center of the geographic region covered by your project.

![Blue Marble, NASA, 1972](images/135918main_bm1_high.jpg#img-full)
