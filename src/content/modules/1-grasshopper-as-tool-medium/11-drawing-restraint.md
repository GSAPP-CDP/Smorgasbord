---
moduleid: 11
title: Drawing Restraint
published: True
slug: drawing-restraint
---

# Drawing Restraint: Grasshopper, Simple Logic and Affordances


## Why use tools? Why use Grasshopper?

What does it mean to creatively *constrain ourselves* in a design process, or in a data process? 

--

## Drawing Restraint, Matthew Barney

![drawing_restraint.jpg](images/drawing_restraint.jpg)

>*Matthew Barney, DRAWING RESTRAINT 5, 1989*

![drawing_restraint.jpg](images/drawing_restraint_2.jpg)

>*Matthew Barney, DRAWING RESTRAINT 6, 1989*

![drawing_restraint.jpg](images/drawing_restraint_10.jpg)

>*Matthew Barney, DRAWING RESTRAINT 10, 2005*


Matthew Barney's *DRAWING RESTRAINT * series is about self-imposed limitation, constraint, restraint, and a series of creative processes that emerge out of these restraints:

>Barney’s multipart Drawing Restraint project (begun in 1987, and ongoing) began with a straight­forward proposition: his attempt to make a mark—the most basic component of drawing—while impeded by various physical obstacles, ramps, and harnesses. The early Drawing Restraint works (1–6) comprise an action and its residue, including documentary photography or video, often drawings, and occasionally the restraints themselves. [link](https://www.moma.org/collection/works/81055)

This module takes the idea of creative restraint as a framework to apply onto the idea of a Grasshopper process, or tool. Much like the way Barney's formulation of a constrained system generates a unique drawing process, we could imagine that all of our other processes are constrained, similarly. Our physical tools are constrained or shaped by the physical and material affordances they have. Our software tools in (for example, Adobe Illustrator) are shaped by the affordances of vector-based line work and imagery.

From a programming and data perspective, *restraint* could involve sorting, involve `if` statements, or some limiting process that involves an inventive method of measurement and logic. 

From a design perspective, *restraint* could involve choice, process, decision, that emerges out of some self-imposed, inventive restraint - [a book written without the letter 'e'](https://en.wikipedia.org/wiki/Gadsby_(novel)), for example, or a 48-hour film festival, where the goal is to produce a short film in a duration of time.

In this module, we will use Grasshopper as a medium to explore these **multiple forms of inventive restraint** - measurement and logic, as well as creative constraint. 

Specifically within Grasshopper, we will create a spatial design tool that limits the square feet of walls we can create on a site, or the type of walls we can create, forcing us to design creatively within these constraints.

![wallmaker](images/wallmaker.png)

## Grasshopper

Let's assume that you know some of the fundamentals of Grasshopper; how to make a circle controlled by a slider, etc. (If you don't, see [Intro to Grasshopper]!)

What are some of the fundamental processes of Grasshopper? 

[TK IMAGE]

- Grasshopper, as a flow-based programming language, inherently moves data from left to right. (Grasshopper could be said to be a kind of [functional programming language](https://en.wikipedia.org/wiki/Functional_programming)). 

- Inputs into Grasshopper are created by interface items such as sliders, panels, or components that reference Rhino geometry and data.

- Components modify, alter, sort, this data;

- Outputs of Grasshopper will display this data, create geometry, send it to other software, et cetera.

Our Drawing Restraint tool will have one of each element; an input, a process, and an input.

## Input:

`Geometry Pipeline` to filter, receive data
- Line Length, Math inequality, to create boolean logic
- Dispatch / Sift Pattern with boolean logic 
- Custom Preview

# Step 1


# Step 2


# Step 3
