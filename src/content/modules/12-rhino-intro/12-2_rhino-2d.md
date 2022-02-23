---
moduleid: 122
title: Rhino 2D
published: True
slug: rhino-2d
authors:
 - "Zachary White"
---
# Rhino 2D
## Module Summary:
In the last module, we took an introductory tour of the Rhino interface. Now we're going to get comfortable with the software by developing a model of an existing building. In this module, we'll be drafting 2D geometry which we can use as the basis of our 3D model.

## Modeling a Project
For the rest of this sequence, we'll be constructing a digital 3D model of the Casa Bahia Azul, designed by Cecilia Puga:

![Casa Bahia Azul image #1](images/12-2/tumblr_puuz5iICeN1qd5e3ao7_1280.jpg#img-left)
![Casa Bahia Azul image #2](images/12-2/tumblr_puuz5iICeN1qd5e3ao4_1280.jpg#img-left)
![Casa Bahia Azul image #3](images/12-2/tumblr_puuz5iICeN1qd5e3ao1_1280.jpg#img-left)

Which is a vacation home on the coast of Chile. The geometry of the project is pretty straightforward, so it's a good one to start with. Once we have our model built we can use it to create architectural plans, sections, and perspective drawings.

### Drawing in 2D

The first thing we need to do is find scaled drawings to base our model on. Here's a plan of the ground and second floor of the house:

![CBA Plan](images/12-2/bahia-azul-house10.jpg#img-left)

I've also found this more diagrammatic set of plans that describe the design logic of the building:

![CBA Plan & Section Diagrams](images/12-2/documenti00259-804x1024.jpg#img-left)

And a PDF which includes a more detailed plan, as well as three sections:

This is a jpeg, but what's nice about the PDF is it has vector geometry which we can import directly into Rhino. The original file can be found here.

![CBA PDF Drawings](images/12-2/cba-vector.jpg#img-left)

As well as these isometric drawings:

![Isometric Drawings](images/12-2/documenti00257-443x1024.jpg#img-left)

We won't use these to draft from, but they're a useful reference. Download all the above drawings so that you can put them in your Rhino model.

Also useful is a collection of photographs of the project, which we can refer to as we work to clarify any parts of the building we're finding hard to reconstruct from just the drawings:

### Starting the Model

Now let's jump into Rhino. Create a new file: since the project is designed and built in a country that uses metric dimensions, we're going to use the "large objects, meters" template. 

Next, we'll import our reference drawings into the model. Create a new layer, name it "Picture," and make it the active layer by double-clicking on it. Then maximize the Top viewport by double-clicking on the name.

![getting started](images/12-2/createlayer.gif#img-left)

The "Picture" command creates a flat surface with a bitmap image applied to it. Type "Picture" into the command prompt select the file of the first plan, then follow the prompts to place it in the model, in top view. Don't worry about the size for now, since we'll be correcting it later. Repeat this for the other two image files.

!["Picture" command](images/12-2/picture.gif#img-left)

For the PDF, since we want to bring this drawing into Rhino as geometry rather than an image, we'll use the "Import" command instead of "Picture."

![importing vector geometry](images/12-2/import.gif#img-left)


### Scaling the reference drawings

Next we need to adjust our reference drawings so that their dimensions are accurate in our Rhino model. Usually this is done by referring to a drawing's graphical scale (if none of your drawings have one, you can approximate using exterior doors, which are typically 3'-0" or 0.9m). In all of the reference drawings we found, there's only one of these: it's on the site plan, in the page of diagrammatic plans and elevations. So this is what we'll use to find out what size our building needs to be.

![finding the graphic scale](images/12-2/graphicalscale-01.png#img-left)

This site plan is at a different scale than the rest of the drawing though, so we want to isolate it before resizing it. Since this picture is an ordinary Rhino surface with the drawings applied as a material, we can do this using the `Split` command. Draw a rectangle around the site plan, and use `Split` to cut it out, following the command prompts at the top of the window. You can delete the splitting rectangle when you're done with it.

![splitting the plane](images/12-2/split.gif#img-left)

The site plan is now its own surface. Move it out of the way of the rest of your reference drawings, zoom in on this part of the graphical scale, and use the `Scale` command. Click on each end of the graphical scale (using the entire scale will produce the most accurate results), type '20' and hit `enter`. The image will then be resized so that the distance between the points you chose is 20m.

![scaling the site plan](images/12-2/scale.gif#img-left)

Now we can use the site plan to measure our building. While you're drawing a line, Rhino will display the line's current length in the bottom left of the window, and this is a quick way to measure distances. Try finding the length of the northernmost building module this way:

![measuring distance](images/12-2/dim-location-01.jpg#img-left)

You should find that it's about 13 meters (if it isn't, use the same method on the drawing's scale to check that it's the right size). The low resolution of the image makes the plan pretty blurry though, so it would be good if we could give ourselves some more confidence in this number. Let's look at the rest of the drawings on the page we cut this site plan out of, in particular the diagram in the top left:

![CBA elements diagram](images/12-2/cba-diagram-only.jpg#img-left)

This is a very useful drawing! It seems to explain the design logic and prototypical vocabulary which was used in designing the house. There's a standard profile (the "house" shape), and three standard opening sizes which are cut out of it (the gray rectangles). In plan, the module is divided into eleven equal bays, which alternate between solid walls and openings. The drawings on the right side of the page explain how three variations on this prototype are developed to create the three volumes of the house.

![CBA diagram part II](images/12-2/diagram_2of3.png#img-left)
![CBA diagram part III](images/12-2/diagram_3of3.png#img-left)

Without these drawings, our first impulse might have been to approach our 2D drafting by simply tracing what was drawn in the plans, line by line. But when reconstructing a project, it's important to keep in mind that a building is not a heap of unrelated bits of geometry. Parts and dimensions will repeat. Elements will align, or be symmetrical. Often the whole thing will be laid out according to a regular grid system. The logic will differ in kind and degree depending on when and where the project was built, and by whom, but trying to uncover it, working from the abstract to the concrete and the general to specific, will leave you with a better model and a deeper understanding of the project.

So resize this drawing (again, with the `Scale` command) to make the length of the plan 13m, like it was on the site plan. How long does this make a single bay? 13 ÷ 11 is an irrational number, which seems like an unlikely choice for a module of a floor plan. It's roughly 1.18, which you can verify by drawing a line in Rhino. It seems much more likely that each of these bays is a much cleaner 1.2m, making the entire plan 13.2 meters long. Rescale the plan to match this number, and you'll find that other key dimensions are now nice round numbers as well.

![CBA dimensions](images/12-2/diagram-dimensions-01.png#img-left)

These are the lengths we'll base our model on, so re-scale the other floor plan to match (note that, as explained in the diagram drawings, one of the modules has an extra bay added on). You can also rotate it to be the same orientation as the diagram. We won't use the isometric or imported vector drawings for the rest of this 2D drafting tutorial, so you can move those out of the way, or select them and use the `Hide` command (bring back hidden objects with `Show`). Then we'll be ready to start drawing. If you haven't done so already, remember to save your model!

![rhino-template](images/12-2/underlays-scaled.png#img-left)

### Drafting the Base Modules

Start out by creating a new layer called 'Grid,' giving it a color to distinguish it from other layers, and making it active. Then lock your 'Picture' layer by clicking the icon of a lock next to it in the layers panel, to avoid accidentally selecting or moving your reference drawings as you're working.

![layers](images/12-2/layers-panel.png#img-left)

Start out by drawing the outline of the floor plan, using the `Rectangle` command and clicking the bottom left corner. Since we want our dimensions to be round numbers, we'll type them in directly instead of completing our rectangle with the mouse. So type 5 for the width, hit `enter` (or `spacebar`), and then 13.2 for the length, followed by `enter` again.

![plan outline rectangle](images/12-2/rectangle.gif#img-left)

Next we'll add the lines to mark the bays. Draw a `Line` along the bottom of your rectangle and then select it. To make a series of equally spaced copies of an object, use `ArrayLinear` (there's also an `Array` command, which creates three-dimensional grids of objects), following the command prompts to create 11 copies spaced 1.2 meters apart.

![array linear](images/12-2/arraylinear.gif#img-left)

Now move on to the house-shaped section at the top of the drawing. Use `Polyline` to draw the bottom and sides, still entering dimensions with the keyboard rather than mouse (the side walls are 3m high, the width still 5m).

![polyline](images/12-2/polyline.gif#img-left)

For the roof, it's the angle that's a round number, at 30° (check this yourself with the `Angle` command, following the prompts). So draw a horizontal line between ends of the side walls, and then rotate it 30° around its left endpoint.

![rotate](images/12-2/rotate.gif#img-left)

Now `Mirror` the line across the floor's midpoint, `Trim` the lines so they meet, and `Join` all five segments into a single closed polyline.

![mirror and join](images/12-2/trim-join.gif#img-left)

To give thickness to the wall in both plan and section, `Offset` the outlines the thickness of the wall (0.2m).

Our last task on this part of the diagram is tracing the gray rectangles which represent the openings in the volumes.

![completed base elements](images/12-2/base-grid.PNG#img-left)

### Adapting the Prototype Plan

Next we'll take these elements and develop them into specific plans and sections of each part of the house. We can skip straight to the final diagram on the bottom right of the page.

![plan & section diagrams](images/12-2/diagram_3of3.png#img-left)

Start by using `Copy` to place your base drawing onto each of these floor plans. The first two already match, but the third (the guest house) has a couple modifications we need to make.

![base grids](images/12-2/base-on-plan.png#img-left)

First, this plan is one bay longer than the other two. To stretch it, select the two rectangles representing the outer wall, and press the `F10` key (or use the `PointsOn` command). This lets you edit the 'control points' which make up a NURBS object as individual pieces of geometry, and works on surfaces and solids as well as curves like these (we'll go into more detail on NURBS and control points in a later tutorial). Select the top corners of your rectangles and move them up the width of one bay, either by typing the distance or using one of the existing bays as a reference to snap to. Then fill in the missing grid line with `Copy`.

![edit points](images/12-2/points-edit.gif#img-left)

The other change is this third plan has a variation on the grid used in the other two. These new lines are midway between existing ones, except the topmost one, which looks to be 0.3m off (a quarter of a bay). Add these lines to the plan by copying existing ones.

![extra grid lines](images/12-2/alt-grid.png#img-left)

We'll also adapt our cross-sections to each of these modules, so bring copies of that over here as well. This time it's the middle drawing that needs to be modified. Flip this section upside-down (with `Rotate`, or the Gumball), and line it up again with the underlay drawing.

![cross](images/12-2/base-sections.png#img-left)

Now we'll add the floor to the section. Start by drawing a line connecting the inner corners, and then copy it downwards the thickness of the floor, which looks to be 15cm. We could clean this up using `Trim` and `Join` again, but there's a useful command called `CurveBoolean` which allows you to extract closed regions from a network of intersecting curves. Try it out with your walls and floor, selecting the option that deletes all your input curves, since you won't be needing them anymore.

![cross sections](images/12-2/curveboolean.gif#img-left)

### Completing the Plans

We're finally ready to move our line work over to the real floor plans of the house. Make sure when you do that inside edges of the grround-level volumes are aligned, and note that the gap between them is the width of a single grid bay (1.2m). The upper level floor plan off to the left also aligns with the grid of the lower volumes.

![grids in place](images/12-2/base-in-place.png#img-left)

That just leaves the exterior spaces of the building to draw. You can do this using the `Rectangle` and `Polyline` commands like we did above, keeping points aligned and making sure stair treads have a consistent depth (the long ones are 0.9m, the short ones 0.3m). It would also be good practice here to keep your layers organized, creating a "Wall" and "Terrace" layers in addition to "Grid," each having a distinct color and containing the appropriate geometry. When youy're finished, you should have this:

![CBA 2D Complete](images/12-2/cba-2d-final.png#img-left)

Note that I've made the underlay semi-transparent to make it easier to see what I've drawn: you can do this by selecting it and going to the "Material" tab in the "Properties" panel, then moving the "Transparency" slider.

![material transparency](images/12-2/transparency.png#img-left)

A couple other things to note here. First, we haven't recreated the plan as it appears in our source drawings; instead, we've created the reference geometry that will help us build a 3D model of this building. Don't worry if you can't picture how this is going to work yet, it should become clearer once we move into 3D.

Second, we haven't drawn any of the house's interior. These tutorials will only walk you through creating the exterior of the building, but will teach you almost everything you need to model the inside as well, so you should definitely give it a shot for some extra practice (it will also give you a lot more to work with when you start using the model to make drawings). If you'd like some more practice working in 2D before moving to the next tutorial you can start now, but doing the 3D portion of this tutorial first will give you a better idea of what geometry you'll need to complete the model.
