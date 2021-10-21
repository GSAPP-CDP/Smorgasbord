---
moduleid: 122
title: Rhino 2D
published: True
slug: rhino-2d
---
# Rhino 2D
## Module Summary:
In the last module, we took an introductory tour of the Rhino interface. Now we're going to get comfortable with the software by developing a model of an existing building. In this module, we'll be drafting 2D geometry which we can use as the basis of our 3D model.

## Modeling a Project
For the rest of this sequence, we'll be constructing a digital 3D model of the Casa Bahia Azul, designed by Cecilia Puga:


Which is a vacation home on the coast of Chile. The geometry of the project is pretty straightforward, so it's a good place to start. Once we have our model built we can use it to create architectural plans, sections, and perspective drawings.

### Drawing in 2D

The first thing we need to do is find scaled drawings to base our model on. Here's a plan of the ground and second floor of the house:


I've also found this more diagrammatic set of plans that describe the design logic of the building:

And a PDF which includes a more detailed plan, as well as three sections:

This is a jpeg, but what's nice about the PDF is it has vector geometry which we can import directly into Rhino. The original file can be found here.

As well as these isometric drawings:

We won't use these to draft from, but they're a useful reference. Also useful is a collection of photographs of the project, which we can refer to as we work to clarify any parts of the building we're finding hard to reconstruct from just the drawings:

### Starting the Model

Now let's jump into Rhino. Create a new file: since the project is designed and built in a country that uses metric dimensions, we're going to use the "large objects, meters" template. 

Next, we'll import our reference drawings into the model. Create a new layer, name it "Picture," and make it the active layer by double-clicking on it.

The "Picture" command creates a flat surface with a bitmap image applied to it. Type "Picture" into the command prompt select the file of the first plan, then follow the prompts to place it in the model, in top view. Don't worry about the size for now, since we'll be correcting it later.

Repeat this for the other two image files.

For the PDF, since we want to bring this drawing into Rhino as geometry rather than an image, we'll use the "Import" command instead of "Picture."


### Scaling the reference drawings

In all of the reference drawings we found, there's only one graphical scale: it's on the site plan, in the page of diagrammatic plans and elevations. So this is what we'll use to find out what size our building needs to be.



## Modules:
The Rhino Interface <BR>
Drafting in 2D <BR>
Modeling in 3D <BR>
Modeling with NURBS
