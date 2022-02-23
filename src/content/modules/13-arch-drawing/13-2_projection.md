---
moduleid: 132
title: Projection
published: True
slug: projection
authors:
 - "Zachary White"
---
# Introduction to Projection
## Module Summary

This module will introduce the different types of projection, with a little bit of history about each. It will then go through creating a simple Make2D of the Casa Bahia Azul in each type.

## What is Projection?

Overview TK

- what problem is projection solving?
- need some fun images up here

## Tutorial

Perspective

### Perspectival Projection

So far, unless you changed the settings of your viewport, all our 3D modeling has been done in perspective. This is a familiar way of representing space which creates an illusion of depth by depicting objects as smaller the further they are from the viewer or camera. In a perspective drawing, straight lines which are parallel in space appear to converge at "vanishing points." If the lines are parallel to the horizon, the vanishing point will also be on the horizon.

![albertian perspective](images/13-2/alberti-perspective.png#img-left)

In architectural representation, perspectival drawings are classified as "One-Point," "Two-Point," or "Three-Point" perspectives. These classifications describe the orientation of the "camera" with regards to the subject, rather than any inherent difference in the construction of the projection. They also assume that the subject is more or less rectilinear, but when representing buildings this is usually true (at the very least, walls tend to be perpendicular to the ground plane). The number of "points" refers to how many vanishing points there are in the drawing, if you're drawing a simple box.

![albertian perspective](images/13-2/perspective-points.png#img-left)

Let's make some perspective drawings of the Casa Bahia Azul.

### Three-Point Perspective

If you were to pick an arbitrary view of your model and use Make2D, the result would be a three-point perspective. Try this with an aerial view:

![arbitrary aerial perspective](images/13-2/cba-perspective-random.jpg#img-left)

Choose two lines in the drawing which represent vertical edges, and coninue them until they meet. Then do the same with edges that were on the X and Y axes.

![aerial vanishing points](images/13-2/aerial-vanishing-pts.jpg#img-left)

These are the three vanishing points of your three-point perspective.

Let's set up a view with a more deliberate relationship to the building. First, while in Perspective view, use `NewFloatingViewport` to create a new window: we'll use this to see our output view, and the main viewport to move our camera around. In the floating viewport, use the `Camera` command and choose "Show" in the command prompt. The camera, target, and cone of view will appear as objects in your other viewport.

![camera object](images/13-2/camera-show.png#img-left)

You can move the camera and targets as if they were ordinary points, or move both at once using the midpoint of the line connecting them. Try this out by creating a large cube, and moving the camera and target to opposite corners of it.

![camera box](images/13-2/camera-box.png#img-left)

Then delete the `box`, and adjust the view, using the center point to move both camera and target, until the building is centered in the viewport. Once you've found a view you like, use `NamedView` to save it, so you can come back to it later.

![saving a view](images/13-2/named-view.png#img-left)

Then use `Make2D` again to make another three-point perspective.

![3pt diagonal](images/13-2/3pt-diagonal.jpg#img-left)

### Two-Point Perspective

In a two-point perspective, lines parellel to the ground plane converge but vertical lines remain parallel. In order to construct a drawing like this, we need our line of sight to be parallel to the ground plane, intersecting with vertical lines at a right angle. To do this, simply move your camera vertically so that it is at the same elevation as its target.

Typically, a perspective like this is drawn at eye-level, or roughly 5'-6" (168 cm) above the ground. `Move` the camera and target to this height, then adjust to center the model in the frame.

![two-point perspective setup](images/13-2/two-point-setup.png#img-left)

Save this view as well, then `Make2D`. You can check that, while you still have two vanishing points, vertical edges are now parallel.

![3pt diagonal](images/13-2/2pt-symmetric.jpg#img-left)

Since we set our camera at a 45-degree angle to the building, our two vanishing points will be symmetrically spaced to the left and right of the center of our image. But anywhere we place our camera in the XY plane will result in a two-point perspective, as long as we keep it at the same height as the target.

![asymmetric 2-point perspective](images/13-2/2pt-asymmetric.jpg#img-left)

### Forced Two-Point Perspective

As a general rule of thumb, a drawing vertical lines with no vanishing point will create a better-looking composition than one in which vertical lines are *almost* parallel, but not quite.

But sometimes it's difficult to set up a view that works perfectly as a true two-point perspective; often, for instance, there's more happening in the scene above eye-level than below,  which would be easier to capture by pointing your camera upwards. For these situations, Rhino gives you the option of artificially straightening vertical lines to "force" a two-point perspective. Try moving your camera above your target, and switching to this projection in the viewport properties panel.

![two-point perspective setup](images/13-2/2pt-forced.png#img-left)

![two-point perspective](images/13-2/2pt-forced-capture.jpg#img-left)

This works well if the view is already close to being a true two-point perspective. As the view diverges further and further from horizontal, the distortion in the result becomes extreme.

![two-point perspective distorted](images/13-2/2pt-forced-extreme.jpg#img-left)

### One-Point Perspective

In a one-point perspective drawing, the camera is aimed perpendicularly to one of the faces of the building, with the result that only lines moving away from the camera appear to converge. This creates the kind of classical, balanced image that was often used by Renaissanice painters who were first experimenting with perspective.

![school of athens](images/13-2/school-of-athens.jpg#img-left)

For this, move the camera so it's not only at the same elevation as it's target, but also aligned with it on either the X or Y axis.

![one-point perspective setup](images/13-2/1pt-setup.png#img-left)

`Make2D` this one too, and check that you only have one vanishing point.

![one-point perspective drawing](images/13-2/1pt-capture.jpg#img-left)

### View Angle

Other than the placement of the camera and target, the main variable determining a perspective projection is the view angle. This describes the angle between the outer edges of the camera's cone of view. Look at your camera from above to see a representation of this.

![view cone](images/13-2/view-cone.png#img-left)

Rhino describes this angle in terms of "lens length," as if you were using a physical camera. By default this is set to 50mm, which roughly approximates the view angle of the human eye. You can adjust this value in the properties panel.

Lowering the lens length allows you to capture more of your scene from a given viewpoint, but makes the angles in the resulting image more acute. Try setting it to 25:

![view cone](images/13-2/lens-25mm.png#img-left)

The resulting view is distorted, but a short lens length can be used deliberately to create a more dynamic image. In contrast, try raising the lens length to 100:

![view cone](images/13-2/lens-100mm.png#img-left)

Increasing the view angle moves the vanishing points away from the center of the frame, bringing converging lines closer and closer to parallel. The resulting image appears more stable, solid. If we could place the camera infinitely far away, the lines would never converge, producing a **parallel projection**.

![view angle comparison](images/13-2/view-angle-comparison.jpg#img-left)

### Parallel Projection

With parallel projection, lines which are parallel in three-dimensional space remain parallel on the page, and the size of objects is not affected by their location. Strictly speaking, the orthographic drawings we created in the last module used a type of parallel projection, with the constraint that the camera was oriented perpendicularly (orthogonally) to one of the faces of our building. But parallel projection can be used from other points of view as well.

![a parallel rendering](images/13-2/isometric.jpg#img-left)

Parallel projection sacrifices the immersive illusion of depth in favor of dimensional and geometric consistency. This sense that parallel projection was objective, or scientific, made it a favorite of designers in the modernist era, who popularized its use in architectural drawing.

![a parallel rendering](images/13-2/theo-van-doesburg.jpg#img-left)

Before the 20th century, versions of parallel projection can be found in east Asian art:

![wang shen](images/13-2/wang-shen.jpg#img-left)

and in medieval Europe:

![unicorn tapestry](images/13-2/unicorn.jpg#img-left)

It was also commonly used in early video games, since the unchanging appearance of objects in parallel projection was less graphically and computationally demanding than rendering in perspective:

![SimCity 2000](images/13-2/sim-city.gif#img-left)

To use parallel projection in your Rhino viewport, select it in the properties panel:

![switching to parallel projection](images/13-2/properties-parallel.png#img-left)

You can orbit around in this view as you would in perspective, but you'll find that a vector drawing from this view preserves parallel edges.

![parallel projection extension lines](images/13-2/parallel-extensions.jpg#img-left)

### Isometric Projection

"Isometric" refers to parallel drawings which give equal treatment to three faces of a box-like object. A cube drawn isometrically becomes three identical rhombuses, with interior angles of 120 degrees.

![isometric cube](images/13-2/iso-cube.jpg#img-left)

Each visible edge of the cube will have the same length, just like in 3D space: in an isometric projection, relative dimensions along the X, Y, and Z axes are preserved. Diagonal lines, however, will be stretched or shortened.

To set up an isometric projection, we could place our camera and target at opposite corners of a cube, just like we did earlier when working in perspective.

![box isometric](images/13-2/cba-iso-box.png#img-left)

But Rhino saves us the trouble by including four isometric views in the "View" dropdown menu.

![set isometric view](images/13-2/set-view-isometric.png#img-left)

Try out each of these to make isometric drawings of the Casa Bahia Azul.

![all isometric views](images/13-2/all-isometrics.jpg#img-left)

### Oblique Projection

Isometric drawing preserves dimensions along the main axes, and distorts all three visible faces equally. The goal of an oblique drawing is to depict either a plan or elevation with no distortion at all, while still conveying a sense of three-dimensional space. In this drawing, for instance, all angles and dimensions in the XY plane are depicted accurately, giving a clear description of the building's plan. Here's a plan oblique drawing by Frank Lloyd Wright:

![FLW Plan Oblique](images/13-2/flw-plan-oblique.jpg#img-left)

And here's one by Madelon Vriesendorp & Rem Koolhaas which uses the same basic projection, but with a different rotation and no plan cut:

![FLW Plan Oblique](images/13-2/delirious-ny.jpg#img-left)

(Drawings like this are commonly referred to as **Axonometric**, although the technical definition of this term includes all parallel projections.)

### Plan Oblique

Unlike all of the perspective and parallel projections we've used so far, we can't create a drawing like this in Rhino just by changing the settings or placement of the camera. We have to manipulate the actual geometry of our model. So select all of your 3D geometry, copy it to a new location in the model, and then `hide` the original.

Select the new geometry you just copied, switch to the Right view, and then `Shear` it by 45-degrees.

![set isometric view](images/13-2/shear.gif#img-left)

Look at this distorted model from the top, and use `Make2D` on it. Because we sheared the model in the horizontal plane, the plan is unchanged. And because we used a shear angle of 45 degrees, the front face of the building is also represented accurately.

![plan-elevation-axonometric](images/13-2/plan-elevation-oblique.jpg#img-left)

This drawing preserves both plan and elevation, but becuase it only represents two faces, it doesn't give a great three-dimensional impression of the building. Now `Show` your original model and create three more copies of it. But this time, `rotate` the copies 30, 45, and 60 degrees in top view. Select all of them, and just like before, `Shear` them 45 degrees when looking at them from the side. Then switch back to top view, and use `Make2D` again.

![plan-elevation-axonometric](images/13-2/plan-oblique-angles.jpg#img-left)

You now have three **Plan Oblique** drawings. Each of them has an accurate plan. The dimensions of vertical and horizontal lines are also preserved, but just like in the isometric drawing, diagonal lines in vertical planes are either stretched or compressed. The middle drawing gives equal treatment to the two elevations of the building, while those on either side privelege one face over another.

As an extra challenge, try making a plan oblique drawing that includes a plan cut, as in the Frank Lloyd Wright drawing above.

### Elevation Oblique

There are other types of oblique projection that depict elevation accurately, rather than plan. These are less common in architectural representation, but see if you can recreate them using the tools introduced above.

**Cavalier Projection**: Similar to a 45 plan oblique, but an elevation is preserved rather than the plan. Lines "receding" from the viewer are the correct length, but angles and diagonal distances are distorted.

**Cabinet Projection**: Cavalier projection can appear "stretched" because we expect planes receding from our view to be foreshortened. Cabinet projection corrects for this by compressing those planes: lines along the Y-axis will be half as long in the drawing as the are in reality.

![elevation oblique](images/13-2/elevation-oblique.jpg#img-left)

## Conclusion

In this tutorial we learned about different ways of projecting three-dimensional geometry onto a two-dimensional picture plane, but we did so using only line geometry. Next time we'll cover simple materials, lighting and rendering.
