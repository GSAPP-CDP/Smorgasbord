---
moduleid: 11
title: Drawing Restraint
published: True
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

<div class="instruction">
[TK explanation and images]

[TK explanation and images]

[TK explanation and images]
</div>

- Grasshopper, as a flow-based programming language, inherently moves data from left to right. (Grasshopper could be said to be a kind of [functional programming language](https://en.wikipedia.org/wiki/Functional_programming)). 

- Inputs into Grasshopper are created by interface items such as sliders, panels, or components that reference Rhino geometry and data.

- Components modify, alter, sort, this data;

- Outputs of Grasshopper will display this data, create geometry, send it to other software, et cetera.

Our Drawing Restraint tool will have one of each element; an input, a process, and an output.

## Input:

Create the `Geometry Pipeline` to filter, receive data. This component automates the geometry reference process; where beforehand you had to .. 

[TK explanation and images]

[TK explanation and images]

[TK explanation and images]

[TK explanation and images]

[TK explanation and images]


*Affordances Exercise:*

- Try creating a `Geometry Pipeline` that picks up points, then plug its output into a `Sphere` component. Plug in a slider so that the sphere have a nice proportional size to your viewport.

- Now, minimize Grasshopper and play with adding, moving, and deleting points in Rhino. See how points in Rhino 'automatically' have spheres surrounding them. Spheres will 'automatically' move based off of the location of the point.

*How does this feel?* Remember, this was created out of two components, and has a simple logic: "Any point becomes turned into a sphere of radius X". However, creating and deleting points with it seems to be seamless with Rhino's interface. After using it for a minute, you could almost imagine that 'creating a point' = 'creating a sphere.

Congrats - we have now altered, slightly but surely, the perceived interface of Rhino. This is because we have altered the feedback loop between our action and perception. As Alva Noe says in [Action in Perception](https://mitpress.mit.edu/books/action-perception), "Perception is not something that happens to us, or in us, it is something we do." 

## Process

[TK add in detail]

[TK explanation and images]

[TK explanation and images]

[TK explanation and images]

- Change the settings on `Geometry Pipeline` to input lines`

- Line Length, Math inequality, to create boolean logic

## Output

[TK add in detail]

[TK explanation and images]

[TK explanation and images]

[TK explanation and images]


- Dispatch / Sift Pattern with boolean logic 
- Custom Preview



## Tool Testing

By now, you should have a tool that lets you draw polylines to create 'walls'; when the total sum of walls is longer than a set length, all walls turn red, indicating that it should be removed.

[TK explanation and images]

[TK explanation and images]

Try testing this out, again minimizing Grasshopper to only work in Rhino to get a feel for its *affordances* - how it *feels*, how it alters the perception-action loop between what you do and what you see.

As an experiment, try drawing a maze, or a simple folly, or a layout of a simple apartment unit. What does it feel like for walls to turn red? How do you find yourself responding to this, as a designer?

Some other examples you might want to try is:
- Having walls turn red only when they each are longer than X but shorter than Y 
- Having walls turn red when they are too close to an average length of all of the walls (you could use the `Average` component)

[TK explanation and images]

[TK explanation and images]

Conceptually, this tool is simple; it tells you, "please do not draw walls longer than X length". In theory, this is something that you could do without using Grasshopper. But how does your *felt experience* of using the tool differ? Where it feel limiting, or playful?

This feeling of tool-making become the basis of other tools (or mediums) that we create in Grasshopper. Hopefully you can see that Grasshopper is not just a computational medium; it is also a design environment that the designer interacts with. Grasshopper enables the shaping of this design environment.

We will be continuing to develop this idea of a tool, the shaping of the design environment, and the shaping of the design system in the rest of this sequence.

