---
moduleid: 123
title: Rhino 3D
published: True
slug: rhino-3d
authors:
 - "Zachary White"
---
# Rhino 3D
## Module Summary:
In the last module, we drafted 2D base geometry for our model of the Casa Bahia Azul. Now we can jump into 3D to build our model. When we're done, we'll have something that looks like this:

![Casa Bahia Azul Exterior Model](images/12-3/cba-exterior-complete.png#img-left)

Since we'll be working in 3D from here, let's switch viewports by clicking on the "Perspective" tab at the bottom left of your window. Then make sure your camera target is in the area where you'll be working by selecting your plan and using the `Zoom` command, and choosing the `Selected` option in the command prompt (or use the default alias for this, "ZS"). Now when you orbit (by dragging the right mouse button), the camera will remain pointed at this part of your model.

We'll also do some layer management before jumping in. Make two new layers, called "3D" and "2D". Drag the layers you created in the last tutorial, "Grid," "Picture," "Wall," and "Terrace," onto the "2D" layer. Then create a new layer called "Shell," which we'll use for the outer walls of the house, and drag it onto "3D." You can also make it the active layer. Nesting layers like this allows you to manage more of them, and to lock or hide whole categories of geometry you aren't currently working on.

![3D start layers](images/12-3/start-layers.png#img-left)

### Modeling the Outer Walls

To make the first outer shell, we want to use one of the cross-sections (the "house" shapes) we made earlier. Select one of them, including both the inner and outer walls, and copy it over to the more northern ground floor plan of the building.

![3D start layers](images/12-3/section-in-place.png#img-left)

Now we need to flip it up so it's in the right 3D orientation. We could do this with the gumball, but instead let's use `Rotate3D`, which lets rotate an object around an axis of our choosing.

![Rotate3D](images/12-3/rotate3d.gif#img-left)

Note that I've used the bottom of the inner polyline as the axis of rotation, which means that the ground of our cross-section is now at the same elevation as our Rhino ground plane--that is, at 0 on the Z-axis.

Next we want to use these polylines to make a solid object. Switch to the "Ghosted" display mode so you'll be able to see the object your creating more clearly. Then select the two polylines of the cross-section, and use the `ExtrudeCrv` command. As you move your mouse, you'll see two surfaces emerging perpendicular to the curves. To create this new object as a volumetric solid rather than two surfaces, click 'Solid' in the command prompt (or type 'S' and hit `enter` or `spacebar`). Then click on the inner wall at the opposite end of the plan to specify the length.

![extrude](images/12-3/extrude.gif#img-left)

For the walls at either end of the volume, use `Extrude` again, this time selecting only the outer polyline of the cross-section. Click on the outside wall in plan to set the extrusion depth. Then move a duplicate of this to the opposite end, with `Copy` or `Mirror`.

![extrusion end caps](images/12-3/extrusion-end-caps.png#img-left)

Next we do the more southern part of the plan, the guest house. Copy the long extrusion and one of the caps over to that part of the reference drawing.

![extrusion end caps](images/12-3/second-module-setup.png#img-left)

Since this one is longer, we want to stretch our central 'tube' geometry. We'll use a command called `Scale1D` for this. Enter that command with the geometry selected, use the whole length as the reference, and then click on the far inner wall in the plan to set the new length. Add the cap to this one too.

![Scale1D](images/12-3/scale1d.gif#img-left)

For the upper, "upside-down" volume, we'll use the other cross-section we created using CurveBoolean in the last tutorial. Copy that one over to the plan and flip it upright, keeping the floors aligned as before.

![Third Volume Setup](images/12-3/third-volume-setup.png#img-left)

Then extrude these curves too, and add the caps on the ends.

![all shells extruded](images/12-3/shells-extruded.png#img-left)

### Cutting Holes for the Doors and Windows

Now that we have all three volumes, we need to punch holes into them for our windows and doors. We'll do this by creating the "holes" as solid objects, then subtracting them from our outer shells. In Rhino this is done as a "Boolean" operation. You may be familiar with Boolean logic, which uses the operators NOT, AND, and OR to evaluate truth values or combinations of intersecting sets. 

![boolean operators](images/12-3/boolean-ven.jpg#img-left)

Boolean operations in Rhino work the same way, but for solid geometry. You can think of two intersecting objects like a Venn Diagram, and find the "Union," "Intersection," or "Difference" of them. Here we can see the results of each of these, by using `Boolean2Objects` and toggling through the results.

![boolean2objects](images/12-3/boolean2objects.gif#img-left)

We drew the outlines of the openings in the last tutorial, when we traced the gray rectangles in the first diagram. Now we'll extrude those into boxes--the height doesn't matter as long as it's thicker then the walls. Then rotate them so they're upright, and move them over to to model.

![boolean2objects](images/12-3/boolean-boxes.png#img-left)

Now make copies of these boxes that intersect with the outer shell of the dining room volume, looking at the floor plan to see where the openings should be. Keep things tidy by snapping the edges of the boxes to the grid we created in the last tutorial, and make sure the bottoms of the boxes are at ground level.

![boolean prep](images/12-3/boolean-prep.png#img-left)

Now we're ready Boolean out the holes. For our current purpose, subtracting one object from another, we want a BooleanDifference. Set "DeleteInput" to "Yes" since you won't need the boxes afterwards.

![BooleanDifference](images/12-3/boolean-difference.gif#img-left)

Repeat this same process for the other two volumes.

![outer walls with all holes punched out](images/12-3/boolean-complete.png#img-left)

### Cleaning up the Vector Reference Drawings

From here we'll be getting a bit more into the details of the house, so we'll start referring to the vector drawings we imported in the last tutorial, which show a lot more information than the raster images we've been working from. You might wonder why we didn't just use these from the start! But the level of detail in these drawings would have been a distraction, and made it harder to tease out the concepts driving the design of the project.

![BooleanDifference](images/12-3/vector-reference.png#img-left)

Start by scaling the drawings so that the "standard" volumes are 13.2 meters by 5 meters (note that these drawings are not all at the same scale, so you need to resize them individually). You can double-check that you've gotten the scale right by measuring the widths of the windows.

We won't be using the greenish lines describing the patterns of the concrete and stone, and it would clean things up if we got rid of them. Since all this linework was placed on the same layer when we imported it, the easiest way to do this is by selecting one of the lines, using `SelColor` to select all the other lines that have the same color, and then deleting them.

![cleaned up vector drawings](images/12-3/vector-reference-clean.png#img-left)

### Door & Window Blocks

Now we're ready to fill in the windows and doors on our model. Make a new "Window" layer for this, with "Glass" and "Frame" layers nested underneath it. Give these last two unique colors, as usual.

![window layers](images/12-3/window-layers.png#img-left)

Take your 1.2m x 2.4m rectangle (the medium-sized opening), make a `Copy` of it, and `Offset` it inwards the width of the window frame (we can see on our cleaned-up vector reference drawings that there are a few variations, but they're about 0.1m, which is good enough for now).

![window outlines](images/12-3/window-outlines.png#img-left)

Then `Extrude` these the depth of the window (looking at the reference drawings again, 0.05m) to create the frame. The glass itself is thin enough that we can represent it with a simple plane rather than a box, so select the inner rectangle and use `PlanarSrf` to create a planar surface bounded by that rectangle. Then `Move` the plane upwards (by selecting "Vertical" or typing 'v' in the command prompt) so that it's in the center of the frame. Make sure both objects are on the right layer.

![window geometry](images/12-3/window-geometry.png#img-left)

Select both parts of the window, rotate them so that they're upright, and move them into place in one of the openings.

![window in place](images/12-3/window-in-place.png#img-left)

At this point, we could copy these two pieces of geometry into each of the other openings of this size to fill in the rest of the windows. But this window is a distinct element that repeats through the building, so creating a bunch of unrelated copies of it would be a bit redundant. Plus, what if we wanted to change this window later, to add more detail to it, for instance? We'd have to go back and replace them all individually. So instead, we're going to turn this window into a "Block." A block is like a sub-drawing contained within your model, which Rhino only has to record one description of, and if you change one instance of it, the rest change too. This saves you time, but also, for more complex models, disk space and memory.

So select your frame and glass, and use the `Block` command. You'll be asked to choose the 'base point' of the block, which is the origin of this new sub-drawing. The lower-left corner will work. Next you'll be prompted to give it a name, which you'll want to be specific enough to distinguish it from any other window blocks you'll create: I've gone with "Window 120". Hit 'OK' and your block will be created. Note that a block exists on a layer independent of the elements that make it up, so make sure this one is on the "Window" layer to avoid confusion further down the line.

![block creation](images/12-3/block-creation.gif#img-left)

Now you can copy this block into all the other openings of this size. Experiment with the `Mirror` and `Orient` commands to see how efficiently you can go about this.

![first windows placed](images/12-3/windows-120-placed.png#img-left)

Once you're done, try making a change to the block, to get a sense of how useful they can be. Imagine we're going to make a rendering using this model, and want our glass to have an accurate thickness rather than being a flat plane. Double-click one of your windows to open the Block Editor. Then use `ExtrudeSrf`, turning on the "BothSides," "Solid," and "DeleteInput" options in the command prompt, and enter "0.5cm" to give your glass a total thickness of 1 cm. (If you receive a warning that this distance is too small, you can change your unit tolerances by using the Units command and changing the "Absolute tolerance" to 0.001 units.) Click "OK" in the Block Edit window to exit the block editor, and you'll see that all your other windows now have solid panes of glass as well.

![block edit](images/12-3/block-edit.gif#img-left)

Our doors and wide windows are going to be very similar to the window block we just created, so instead of building each of those from scratch, let's re-use some of the work we've already done. Make two copies of your window out in an open area where other geometry won't get in the way, and use the `Explode` command on them. `Explode` turns an instance of a block back into ordinary geometry without affecting the other instances. (It can also be used to break an object into its component parts, for instance a box into six planes or a rectangle into four lines.) Now we can modify these using MoveFace so that one is 0.9m wide, and the other 2.4m.

![move face](images/12-3/move-face.gif#img-left)

Then turn each of them into a new block just like before, and fill out the rest of the building's doors and windows.

![windows complete](images/12-3/windows-complete.png#img-left)

If you ever need to see a list of all the blocks in a drawing, rename them, etc., you can do so using `BlockManager`. You can also place blocks, and even use another Rhino file as a block within your drawing, using `Insert`.

![block manager](images/12-3/block-manager.png#img-left)
![insert](images/12-3/insert.png#img-left)

### Terrace and Garden

The last thing we'll do in this tutorial is model the house's outdoor spaces. Start with the terraces surrounding the ground level buildings, and work using the same commands we've used in this tutorial so far: `Extrude`, `BooleanDifference`, `Scale1D`, etc. You can refer to the dimensions of the imported vector drawings to find the heights of stairs and different levels. The terrace should come out like this:

![insert](images/12-3/terraces-progress.png#img-left)

You may notice that there are discrepancies between the conceptual diagrams, photographs, and detailed vector drawings; that the house as actually built has many variations and special conditions. Resolve these as best you can, but our goal here is to capture the essential features of the house rather than an exact replica. We can always fine-tune it later.

The garden area comes out looking like this: notice that the long stairs turn out to extend further than what we traced in the diagrammatic plans, and that the garden is a modeled as a volume subtracted from one of the terrace objects.

![insert](images/12-3/garden.png#img-left)

### Conclusion

At this point, our model of the exterior walls, windows, and outdoor spaces of the Casa Baha Azul is in good shape. and we're could go ahead and move the upper floor into place. But we haven't modeled any of the interior! So this is a good place to get more practice by trying your hand at creating the interior walls, doors, and built-in furnishings. Most of these things won't require any commands we haven't already covered in the tutorials so far. Challenging yourself to complete this model will be good practice, but also give you richer raw material to work with in the next sequence, Introduction to Architectural Drawing.

![Casa Bahia Azul Exterior Model](images/12-3/cba-exterior-complete.png#img-left)
