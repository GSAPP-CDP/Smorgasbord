---
moduleid: 131
title: Orthographic Drawing
published: True
slug: orthographic-drawing
---
# Orthographic Drawing: Plans & Sections
## Module Summary

In this module we'll introduce the two most essential types of architectural drawing: the plan in the section. We'll give a brief overview of what these drawings are and how they work, and then see how to create them using a Rhino model of a building.

## What is Orthographic Drawing?

//overview TK

-drawing conventions - conistency, legibility
-hatches
-fills
-textures
-lineweights

Here's a plan from 5000 years ago:

[clay tablet plan]

And here's a contemporary one:

[modern plan]

A plan is typically cut at 4' above the floor.

A section is like a plan but sideways



## Tutorial

### Setting up the Plan

In this tutorial we'll be making drawings using the model of the Casa Bahia Azul which we created in the Introduction to Rhino sequence. You'll notice that I've added more detail to the interior of the model. I encourage you to try building out your interiors as well, but if you only have what was directly covered in those tutorials you'll still be able to follow along.

[image of starting model]

To make our floor plan, we first need to cut our model at 4'-0" above the floor. Rhino has objects called "Clipping Planes" that allow us to do this in the viewport, without permanently affecting the geometry in our model. Make a new Clipping Plane layer, activate it, and then use the `ClippingPlane` command. You'll be prompted to draw a rectangle. Clipping planes extend indefinitely regardless of their size or placement, so draw it anywhere.

You'll see that everything above the Clipping Plane is now hidden, and the places it intersects with your model are marked with heavy lines. Now move the plane up to the height at which we want to cut our plan, 4'-0" (or 1.2m).

[clipping plane gif]

What we're looking at now is a 3D version of our floor plan. Switch to `Top` view to look at it straight on (or orthographically), and you'll see that your Clipping Plane is no longer active. Click on it, go to the Properties panel, and check the box next to "Top" to fix this.

To get a quick sense of your plan will come out, try looking at it in the "Technical" or display mode. You might also check it out in "Rendered."

[top view]

### Creating the Linework

Next we'll create the lines for our floor plan. Drag a window around your entire building to select all the gemoetry. To convert these 3D objects to lines, Rhino has a command called `Make2D`. Use it now, and you'll be presented with some options. We're going to use "View" for our projection, "Maintain Source Layers" for object properties, and check the box for "Clipping Plane Intersections." Then hit OK to complete the command.

[image with settings]

Your line geometry will now be created near the origin of your Rhino space (move it out of the way if it overlaps with your model). You'll also have a lot of new layers in the layers panel, nested under "Make2D." The two main categories are "ClippingPlaneIntersections" (lines where the model and clipping plance intersect), and "Curves" (everything below the clipping plane).

[make2d results]

In general, we're going to be treating all of the intersection lines the same no matter what they're cutting through, so right-click on the "ClippingPlaneIntersections" layer, choose "Select Sublayer Objects," and move them all onto this top-level layer. Notice that this Intersections layer was created with a "Print Width" of 0.5, rather than "Default," but also that in your viewport it has the same thickness as everything else. Use the `PrintDisplay` command and toggle "State" to "On" to see a preview of your lineweights.

We do want do do a little clean-up on this plan before making it into a drawing. First, at 4'-0" above the ground our clipping plane cut through the long shallow steps connecting the building to the driveway. This cut line is technically correct, in a sense, but doesn't produce a very useful or accurate description of the entry sequence. So I'm going to clean up the bottom left corner to fill in the stairs that were above the cut line.

This raises questions about how we're going to treat this outer retaining wall. We could represent it as a solid, the same as the walls of the house, but it's actually only partial-height; you can see over it. We could assign a weight or fill to represent a partial-height obstacle, but since the steps create a gradual transition between levels, there's no natural place to draw that boundary. So for simplicity, I'm going to move the entire retaining wall and steps to an ordinary, non-intersection layer.

Depending on how you put your model together, you may have some lines in your Make2D where two pieces of geometry meet, but which don't actually represent anything physical. This is a good time to delete those as well.

[cleaned up line work]

### Hatches and Fills

We want to fill in the areas inside the walls in our plan with a solid color, to distinguish them from the floor and make the drawing easier to read. In architectural drawing, the fill used to represent cuts through solid material is called "poché" (pronounced <i>po-shay</i>). We could fill in our solid walls light grey with a heavy outline, or assign patterns to represent different materials being cut through. But for a simple plan like this, a plain black poché will be fine.

To create solid fills, we need their outlines to be closed curves, not the unconnected line segments we get from using Make2D. Turn off the "Curves" layer, leaving only your cut lines visible. Select them all, and use `CurveBoolean` to create closed regions (doing this by selecting "open" areas will produce the same results, and take less time). You can toggle on the option to delete all input curves, since we won't need them ater this.

[curveboolean gif]




### Dimensions & Annotations

-dims

### Layout

-page
-scale

### Sectioning