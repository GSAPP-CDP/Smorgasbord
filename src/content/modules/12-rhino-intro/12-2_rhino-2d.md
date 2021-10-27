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

![rhino-template](images/12-2/tumblr_puuz5iICeN1qd5e3ao7_1280.jpg#img-left)
![rhino-template](images/12-2/tumblr_puuz5iICeN1qd5e3ao4_1280.jpg#img-left)
![rhino-template](images/12-2/tumblr_puuz5iICeN1qd5e3ao1_1280.jpg#img-left)

Which is a vacation home on the coast of Chile. The geometry of the project is pretty straightforward, so it's a good one to start with. Once we have our model built we can use it to create architectural plans, sections, and perspective drawings.

### Drawing in 2D

The first thing we need to do is find scaled drawings to base our model on. Here's a plan of the ground and second floor of the house:

![rhino-template](images/12-2/bahia-azul-house10.jpg#img-left)

I've also found this more diagrammatic set of plans that describe the design logic of the building:

![rhino-template](images/12-2/documenti00259-804x1024.jpg#img-left)

And a PDF which includes a more detailed plan, as well as three sections:

This is a jpeg, but what's nice about the PDF is it has vector geometry which we can import directly into Rhino. The original file can be found here.

![rhino-template](images/12-2/cba-vector.jpg#img-left)

As well as these isometric drawings:

![rhino-template](images/12-2/documenti00257-443x1024.jpg#img-left)

We won't use these to draft from, but they're a useful reference. Download all the above drawings so that you can put them in your Rhino model.

Also useful is a collection of photographs of the project, which we can refer to as we work to clarify any parts of the building we're finding hard to reconstruct from just the drawings:

### Starting the Model

Now let's jump into Rhino. Create a new file: since the project is designed and built in a country that uses metric dimensions, we're going to use the "large objects, meters" template. 

Next, we'll import our reference drawings into the model. Create a new layer, name it "Picture," and make it the active layer by double-clicking on it. Then maximize the Top viewport by double-clicking on the name.

![rhino-template](images/12-2/createlayer.gif#img-left)

The "Picture" command creates a flat surface with a bitmap image applied to it. Type "Picture" into the command prompt select the file of the first plan, then follow the prompts to place it in the model, in top view. Don't worry about the size for now, since we'll be correcting it later. Repeat this for the other two image files.

![rhino-template](images/12-2/picture.gif#img-left)

For the PDF, since we want to bring this drawing into Rhino as geometry rather than an image, we'll use the "Import" command instead of "Picture."

![rhino-template](images/12-2/import.gif#img-left)


### Scaling the reference drawings

Next we need to adjust our reference drawings so that their dimensions are accurate in our Rhino model. Usually this is done by referring to a drawing's graphical scale (if none of your drawings have one, you can approximate using exterior doors, which are typically 3'-0" or 0.9m). In all of the reference drawings we found, there's only one of these: it's on the site plan, in the page of diagrammatic plans and elevations. So this is what we'll use to find out what size our building needs to be.

![rhino-template](images/12-2/graphicalscale-01.png#img-left)

This site plan is clearly at a different scale than the rest of the drawing though, so we want to isolate it before resizing it. Since this picture is an ordinary Rhino surface with the drawings applied as a material, we can do this using the `Split` command. Draw a rectangle around the site plan, and use `Split` to cut it out, following the command prompts at the top of the window. You can delete the splitting rectangle when you're done with it.

![rhino-template](images/12-2/split.gif#img-left)

The site plan is now its own surface. Move it out of the way of the rest of your reference drawings, zoom in on this part of the graphical scale, and use the `Scale` command. Click on each end of the graphical scale (using the entire scale will produce the most accurate results), type '20' and hit `enter`. The image will then be resized so that the distance between the points you chose is 20m.

![rhino-template](images/12-2/scale.gif#img-left)

