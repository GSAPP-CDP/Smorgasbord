---
moduleid: 134
title: Compositing
published: True
slug: compositing
authors:
 - "Zachary White"
---
# Assembling a Composite Drawing
## Module Summary

All modules up to this point have shown how to create drawings directly from Rhino. This one will show techniques for creating elements of a drawing in Rhino, and then compositing them together using Photoshop and Illustrator, through the creation of a Section Perspective.

## Tutorial

Overview TK: Collage and Composite

In this tutorial we'll be working with a section perspective. Just like the name suggests, this is a drawing that combines a perspectival projection with a section cut. 

// examples - LTL, Bow-Wow, 

I've chosen a cut and view similar to the one we used in the orthographic drawing tutorial.

// section view

The camera is pointing straight at the plane of the cut, resulting in a One Point Perspective. One advantage of this is that the cut itself won't be distorted, embedding a to-scale architectural section within our more immersive perspective drawing.

### Custom View Settings

So far we've been using Rhino's built-in display modes, which work fine for modeling. But to create images of our model, we want more control over what it looks like. Fortunately Rhino's view settings have tons of options for customization.

Let's start by creating a custom display mode that looks like this:

To create a custom display mode, click the dropdown arrow in the upper left corner of your sceen, next to the viewport name, and choose "Display Options." You'll be taken to the customization options for whichever display mode you are currently using. Instead, click "Display Modes" at the top of the list, under "View," to see a list of current display modes in the main part of the window. Select the the mode that most closely resembles the one you want to create (Arctic, in our case), and click the "Copy" button.

// display mode capture

It will be easier to see what we're doing if changes we make are reflected in the viewport, but right now our old display mode is still active. Click "OK" to exit settings and make the new display mode ("Copy of Arctic") active. Then go back to Display Options.

// display options capture

Now we can start editing the appearance of this display mode. Maybe we want the background to display as back instead of white, for more contrast with the building. In the top-level menu, under "Viewport Settings," we can click the swatch next to "Solid color" and change it to black (we could also use the dropdown menu to change it to an image file, or a gradient).

//black background

If we scroll down to "Visibility," we can select what categories of object are shown or hidden. Uncheck "Show clipping planes," for instance, and your clipping plane object will disappear, saving you the trouble of hiding it manually whenever you want to capture a view. Maybe you also have stray curves in the scene from your modeling process, in which case you can also uncheck "Show Curves."

//show settings

In the left sidebar, expand the "Objects" category to see a list of all the categories of geometry whose appearance you can manipulate. Our model would be more legible if we could see the edges of our geometry, so select "Surfaces" and change the "Edge thickness (pixels)" value to 1. Now we can see our edges, but they have the colors of the layers they're on: change "Edge color usage to "Use single color for all edges" and then "Edge color" to black (which should be the default option) for a more consistent look.

//show settings

Next we can go down to the "Clipping Planes" section (still under "Objects") to change how our geometry looks where it's been cut. For this drawing I'm interested in emphasizing the relationship between spaces, rather than the tectonics of the building, so I'll make the cut black as well, to make it recede into the background visually. Change "Color usage" to "Solid color." Unfortunately Rhino has a quirk where pure black surfaces will display as white, so set the Red, Green, and Blue values to 1 to get as close to true black as possible. Finally I'll set the "Edge color" to white, so the bounaries of the cut geometry are visible, but reduce their thickness to 1.

//show settings

The resulting view should look like this. (I've added solid geometry to the ground beneath the building, so we don't see the underside of the terrain.)

//final image

This is just one example of the how you can customize your view settings to create a specific drawing, but there's a vast range of possibilities: experiment with customizing this and other view modes to create your own.

To capture this view as an image, use the command ViewCaptureToFile. This lets you specify the desired resolution of the output image.

//view capture settings

### View Settings for Compositing

Having some unique view settings that you like is great for producing sketches very quickly. But we can also create view settings that capture specific elements from or information about the scene, and use those as raw material for producing intentional, well-developed drawings in Photoshop that we could never get directly from the viewport.

Some of the most useful ones are below. You can download the files to import them below, but trying to recreate them yourself will help you understand the different ways view settings can be customized.

Linework: creates a black and white line drawing more quickly than using Make2D, though the result is a raster image rather than vector. You can make variations which use thicker lines to silhouette edges with nothing behind them, or which also display hidden lines. Created by modifying the "Technical" display mode.

Lighting: captures the lighting in a scene using a plain white material for all objects. Based on "Rendered" mode.

Ambient Occlusion: captures the style of lighting used in "Arctic" mode, where surfaces are shaded based on their proximitly to other surfaces rather than based on a light source, but without the color manipulation which Arctic mode applies.

LayerID: display all objects using the color of their layer, with no edge lines or lighting. This will allow us to select an individual layer using the magic wand tool in Photoshop, for instance to apply a texture to all the objects on it. Created by modifying the "Shaded" view setting.

Diffuse: displays the rendering materials in a model using their flat, unlit base colors, allowing you to apply lighting in Photoshop with greater control. Based on "Rendered" vew.

Z Depth: Not a display mode, but a view activated using the `ShowZBuffer` command (use the same command again to deactivate it). Shades surfaces from white to black according to their distance from the camera. Useful for creating fog effects and depth-of-field blurring. The ZBuffer can't be captured any larger than the resolution of the viewport (though you can get around this by rendering with Cycles instead.) //CHECK THIS IS STILL TRUE IN V7

Give short overview, provide .ini files for download

### Compositing in Photoshop

To create an image in Photoshop by compositing different layers, start by using `ViewCaptureToFile` using each of the display modes above. Be sure to use the same view and output resolution each time.

Open Photoshop

- load as stack
- transparency
- blend modes
- masking, magic wand, color selection
- effects layers

### Exporting Vectors to Illustrator

- Exporting
- Importing
- Line weights, styles
- live paint

### Combining Vector & Raster Images

- illustrator to photoshop
- photoshop to illustrator
- smart objects


## Post-Sequence Challenge: Drawing an Argument
Take the building modeled for the Sequence 12 challenge and create two drawings of it: a section perspective and an exploded axonometric. What is important to show? What elements of the building are you trying to emphasize? Can you use these two drawings to make an argument about the building?
