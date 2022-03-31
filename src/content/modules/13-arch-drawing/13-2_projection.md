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

In the last tutorial we made plans and sections, drawings which are straightforward, undistorted, "flat." But we also want to be able to represent **the depth and volume of three-dimensional space**. As artists we would have complete freedom in how to conceptualize and depict space, but as designers the drawings we make are expected to be, in a sense, reversible. It's not enough for an image to represent a space, the space should be reconstrictible from the image. And, of course, the image will hopefully be at least somewhat illusionistic, corresponding intuitively to the world we perceive with our eyes.

Mathematically translating three-dimensional space onto a two-dimensional plane in a reversible, legible is way called **projection**. In architecture we break projection into two basic categories, **perspectival** and **parallel**.

## Perspectival Projection

So far, unless you changed the settings of your viewport, all your 3D modeling has been done in perspective. This is a familiar way of representing space which creates an illusion of depth by depicting objects as smaller the further they are from the viewer or camera. In a perspective drawing, straight lines which are parallel in space appear to converge at "vanishing points." If the lines are parallel to the horizon, the vanishing point will also be on the horizon.

![albertian perspective](images/13-2/albertisketch.jpg#img-left)
*From De Pictura (On Painting), Leon Batista Alberti, 1435*

This general approach to creating depth goes at least as far back as Ancient Rome. Not much classical painting has survived to the present day, due to the nature of the materials involved (the fresco below was only preserved by the eruption of Mount Vesuvius), but we know from written accounts that they placed a high value on illusionistic representation. It's important to point out that this emphasis hasn't been typical, globally or historically, and the fact that pictorial art from other times and places looks less, to our eyes, "realistic" is due to differences in artistic philosophy rather than technical skill.

![roman wall painting](images/13-2/roman-wall-painting.jpg#img-left)
*Wall Painting from the Villa of P. Fannius Synistor at Boscoreale, c. 50-40 BC. Metropolitan Museum of Art, New York.*

The fresco above shows an early use of "vanishing points," but the projection isn't mathematically rigorous. The formal description of perspective doesn't appear until the Italian Renaissance, being first recorded by Leon Batista Alberti in 1425.

![albertian perspective](images/13-2/albertisketch2.jpg#img-left)
*From De Pictura (On Painting), Leon Batista Alberti, 1435*

Perspectival projection is effective at creating illusionistic space because it reproduces the mechanics of the human eye--or, more precisely, the mechanics of a camera. Painters in the renaissance pioneered the use of the Camera Obscura ("Dark Room"), a device which projected the light from a scene onto a flat surface, and the precursor to the cameras we use today.

![camera obscura](images/13-2/camera-obscura.jpg#img-left)
*Illustration of a Camera Obscura*

### One, Two, and Three-Point Perspective

![types of perspective](images/13-2/perspective-points.png#img-left)
*A Box Drawn with, One, Two, and Three Vanishing Points*

Perspectival images are classified as **One-Point**, **Two-Point**, or **Three-Point**. For "true" projections, these categories describe the orientation of the "camera" in relation to the subject, not a difference in the construction of the projection. They also assume that the subject mostly rectilinear, but when representing buildings this is usually true (at the very least, walls are usually perpendicular to the ground). The number of "points" refers to how many vanishing points there are in the drawing, if you're drawing a simple box.

### One-Point Perspective

![school of athens](images/13-2/school-of-athens.jpg#img-left)
*The School of Athens, Rafael, 1509-1511. Apostolic Palace, Vatican City.*

In a one-point perspective drawing, the view is parallel to both the ground and one of the main primary axes of the subject (and therefore perpendicular to the third axis). The result is that only lines moving away from the viewer converge at a point. This creates the kind of classical, balanced image favored by the Renaissanice painters who were first experimenting with perspective.

### Two-Point Perspective

![hugh ferriss](images/13-2/hugh-ferriss.jpg#img-left)
*Hugh Ferriss, Study for Maximum Mass Permitted by the 1916 New York Zoning Law, Stage 4, 1922. Cooper Hewitt Museum, New York.*

In a two-point perspective vertical lines don't converge, but the two primary horizontal axes each have a vanishing point. In a "true" two-point perspective the line-of-sight is parallel to the ground. However there's a general preference for this type of image over three-point perspectives, so often vertical lines will be drawn parallel even if the camera is looking slightly up or down. When drawing tall buildings this can have a dramatic, imposing effect.

### Three-Point Perspective

![mc escher](images/13-2/escher.jpg#img-left)
*Tower of Babel, MC Escher, 1928*

If the angle of the camera doesn't align with any of the primary axes of the subject, the result is a three-point perspective. This is typically used only when someone wants to draw attention to the fact that the view is aimed upwards or downwards, for instance to dramatize the height of the viewpoint. If the view is at least roughly horizontal, two-point perspective is used instead.


## Parallel Projection

![a parallel rendering](images/13-2/isometric.jpg#img-left)
*Max Guther, 2018*

With parallel projection, lines which are parallel in 3D space stay parallel on the page, and the size of objects isn't affected by their location in space. Strictly speaking the plan and section we created in the last module used parallel projection, with the constraint that the camera was oriented perpendicularly (orthogonally) to one of the faces of our building. But parallel projection can be used from other points of view as well.

Parallel projection sacrifices the immersive illusion of depth in favor of dimensional and geometric consistency. The sense that parallel projection was more objective, or scientific, made it a favorite of designers in the modernist era, who popularized its use in architectural drawing.

![theo van doesburg](images/13-2/theo-van-doesburg.jpg#img-left)
*Theo van Doesburg, Contra-Construction Project, 1923. Museum of Modern Art, New York.*

Before the 20th century, versions of parallel projection can be found in East Asian art:

![wang shen](images/13-2/wang-shen.jpg#img-left)
*Looking in a Mirror by an Ornamental Box. Wang Shên, c. 1036 - c. 1093, Southern Sung Dynasty. National Museum of Taipei.*

and in medieval Europe:

![unicorn tapestry](images/13-2/unicorn.jpg#img-left)
*The Unicorn Rests in a Garden, French / South Netherlandish, 1495-1505. Metropolitan Museum of Art, New York.*

It was also commonly used in early video games, since the unchanging appearance of objects in parallel projection was less graphically and computationally demanding than rendering in perspective:

![SimCity 2000](images/13-2/sim-city.gif#img-left)
*SimCity 2000*

Like perspectives, there are a few different types of parallel projection.
### Isometric Projection

![isometric cube](images/13-2/iso-cube.jpg#img-left)

**Isometric** is the name for parallel drawings which give equal treatment to three faces of a box. A cube drawn isometrically looks like three identical rhombuses, with interior angles of 120 degrees.

Each visible edge of the cube will have the same length, just like in 3D space: in an isometric projection, relative dimensions along the X, Y, and Z axes are preserved. Diagonal lines, however, will be stretched or shortened.

The rendering at the beginning of this section and the image from SimCity both use isometric projection.

### Oblique (Axonometric) Projection

Isometric drawing preserves dimensions along the main axes, and distorts all three visible faces equally. The goal of an oblique drawing is to depict either a plan or elevation with no distortion at all, while still conveying a sense of three-dimensional space. In this drawing, for instance, all the angles and dimensions of the plan are depicted accurately, giving a clear description of the building's plan:

![FLW Plan Oblique](images/13-2/flw-plan-oblique.jpg#img-left)
*Frank Lloyd Wright, American System-Built Houses for The Richards Company project, Milwaukee, Wisconsin,, 1915-17*

And here's one which uses the same basic projection, but with a different rotation and no plan cut:

![captive globe](images/13-2/delirious-ny.jpg#img-left)
*Rem Koolhaas & Madelon Vriesendorp, The City of the Captive Globe, 1972. Museum of Modern Art, New York.*

Drawings like this are commonly referred to as **Axonometric**, although technically this term includes all parallel projections.

## Tutorial

Now let's make some projected drawings of the Casa Bahia Azul, starting with perspective.

### Three-Point Perspective

If you were to pick an arbitrary view of your model and use Make2D, the result would be a three-point perspective. Try this with an aerial view:

![arbitrary aerial perspective](images/13-2/cba-perspective-random.jpg#img-left)
*Arbitrary Aerial Perspective*

Choose two lines in the drawing which represent vertical edges, and coninue them until they meet. Then do the same with edges that were on the X and Y axes.

![aerial vanishing points](images/13-2/aerial-vanishing-pts.jpg#img-left)
*Aerial Vanishing Points*

These are the three vanishing points of your three-point perspective.

But let's set up a view with a more deliberate relationship to the building. First, while in Perspective view, use `NewFloatingViewport` to create a new window: we'll use this to see our output view, and the main viewport to move our camera around. In the floating viewport, use the `Camera` command and choose "Show" in the command prompt. The camera, target, and cone of view will appear as objects in your other viewport.

![camera object](images/13-2/camera-show.png#img-left)
*The Camera Object*

You can move the camera and targets as if they were ordinary points, or move both at once using the midpoint of the line connecting them. Try this out by creating a large cube, and moving the camera and target to opposite corners of it.

![camera box](images/13-2/camera-box.png#img-left)
*Using a Box to Align the Camera*

Then delete the `box`, and adjust the view, using the center point to move both camera and target, until the building is centered in the viewport. Once you've found a view you like, use `NamedView` to save it, so you can come back to it later.

![saving a view](images/13-2/named-view.png#img-left)
*Saving a View*

Then use `Make2D` again to make another three-point perspective.

![3pt Make2D](images/13-2/3pt-diagonal.jpg#img-left)
*A Three-Point Perspective Drawing*

### Two-Point Perspective

To construct a two-point perspective, we need our line of sight to be parallel to the ground plane, intersecting with vertical lines at a right angle. To do this, simply move your camera vertically so it's at the same elevation as its target.

Typically, a perspective like this is drawn at eye-level, or roughly 5'-6" (168 cm) above the ground. `Move` the camera and target to this height (the object's handle is midway between the camera and target), then adjust to center the model in the frame.

![two-point perspective setup](images/13-2/two-point-setup.png#img-left)
*Setting up a Two-Point Perspective*

Save this view as well, then `Make2D`. You can check that, while you still have two vanishing points, vertical edges are now parallel.

![2pt symmetrical](images/13-2/2pt-symmetric.jpg#img-left)
*Two-Point Perspective Drawing*

Since we set our camera at a 45-degree angle to the building, our two vanishing points will be symmetrically spaced to the left and right of the center of our image. But anywhere we place our camera in the XY plane will result in a two-point perspective, as long as we keep it at the same height as the target.

![asymmetric 2-point perspective](images/13-2/2pt-asymmetric.jpg#img-left)
*An Asymmetrical Two-Point Perspective*

### Forced Two-Point Perspective

As a general rule of thumb, a drawing with parallel vertical lines will create a more appealing composition than one in which vertical lines are *almost* parallel, but not quite.

But sometimes it's difficult to set up a view that works perfectly as a true two-point perspective; often, for instance, there's more happening in the scene above eye-level than below, which would be easier to capture by pointing your camera upwards. For these situations, Rhino gives you the option of artificially straightening vertical lines to "force" a two-point perspective. Try moving your camera above your target, and switching to this projection in the viewport properties panel.

![two-point perspective setup](images/13-2/2pt-forced.png#img-left)
*Setting up a "Forced" Two-Point Perspective*

![two-point perspective](images/13-2/2pt-forced-capture.jpg#img-left)
*Two-Point Perspective Result*

This works well if the view is already close to being a true two-point perspective. As the view diverges further and further from horizontal, the distortion in the result becomes extreme.

![two-point perspective distorted](images/13-2/2pt-forced-extreme.jpg#img-left)
*Extreme Distortion in a Forced Two-Point Perspective*

### One-Point Perspective

For this, move the camera so it's not only at the same elevation as it's target, but also aligned with it on either the X or Y axis.

![one-point perspective setup](images/13-2/1pt-setup.png#img-left)
*Setting Up a One-Point Perspective*

`Make2D` this one too, and check that you only have one vanishing point.

![one-point perspective drawing](images/13-2/1pt-capture.jpg#img-left)
*One-Point Perspective Result*

### View Angle

Other than the placement of the camera and target, the main variable which affects a perspectival projection is the view angle. This describes the angle between the outer edges of the camera's cone of view. Look at your camera from above to see a representation of this.

![view cone](images/13-2/view-cone.png#img-left)
*The View Cone*

Rhino describes this angle in terms of "lens length," as if you were using a physical camera. By default this is set to 50mm, which roughly approximates the view angle of the human eye. You can adjust this value in the properties panel.

Lowering the lens length allows you to capture more of your scene from a given viewpoint, but makes the angles in the resulting image more acute. Try setting it to 25:

![view cone](images/13-2/lens-25mm.png#img-left)
*25mm Lens Length*

The resulting view is distorted, but a short lens length can be used deliberately to create a more dynamic image. In contrast, try raising the lens length to 100:

![view cone](images/13-2/lens-100mm.png#img-left)
*100mm Lens Length*

Increasing the view angle moves the vanishing points away from the center of the frame, bringing converging lines closer and closer to parallel. The resulting image appears more stable, solid. If we could place the camera *infinitely* far away, the lines would never converge, and the result would be **parallel projection**.

![view angle comparison](images/13-2/view-angle-comparison.jpg#img-left)
*Comparison of Different Lens Lengths*

To use parallel projection in your Rhino viewport, select it in the properties panel:

![switching to parallel projection](images/13-2/properties-parallel.png#img-left)
*Switching to Parallel Projection*

You can orbit around in this view as you would in perspective, but you'll find that a vector drawing from this view preserves parallel edges.

![parallel projection extension lines](images/13-2/parallel-extensions.jpg#img-left)
*Parallel Projection*

### Isometric Projection

To set up an isometric projection, we could place our camera and target at opposite corners of a cube, just like we did earlier when working in perspective.

![box isometric](images/13-2/cba-iso-box.png#img-left)
*Setting Up an Isometric Projection*

But Rhino saves us the trouble by including four isometric views in the "View" dropdown menu.

![set isometric view](images/13-2/set-view-isometric.png#img-left)
*Setting an Isometric View*

Try out each of these to make isometric drawings of the Casa Bahia Azul.

![all isometric views](images/13-2/all-isometrics.jpg#img-left)
*All Isometric Views*

### Plan Oblique

Unlike all of the perspective and parallel projections we've used so far, we can't create a drawing like this in Rhino just by changing the settings or placement of the camera. We have to manipulate the actual geometry of our model. So select all of your 3D geometry, copy it to a new location in the model, and then `hide` the original.

Select the new geometry you just copied, switch to the Right view, and then `Shear` it by 45-degrees.

![shearing the model](images/13-2/shear.gif#img-left)
*Shearing the Model*

Look at this distorted model from the top, and use `Make2D` on it. Because we sheared the model in the horizontal plane, the plan is unchanged. And because we used a shear angle of 45 degrees, the front face of the building is also represented accurately.

![plan-elevation-axonometric](images/13-2/plan-elevation-oblique.jpg#img-left)
*Plan / Elevation Axonometric*

This drawing preserves both plan and elevation, but becuase it only represents two faces, it doesn't give a great three-dimensional impression of the building. Now `Show` your original model and create three more copies of it. But this time, `rotate` the copies 30, 45, and 60 degrees in top view. Select all of them, and just like before, `Shear` them 45 degrees when looking at them from the side. Then switch back to top view, and use `Make2D` again.

![plan-elevation-axonometric](images/13-2/plan-oblique-angles.jpg#img-left)
*Plan Oblique Comparison*

You now have three **Plan Oblique** drawings. Each of them has an accurate plan. The dimensions of vertical and horizontal lines are also preserved, but just like in the isometric drawing, diagonal lines in vertical planes are either stretched or compressed. The middle drawing gives equal treatment to the two elevations of the building, while those on either side privelege one face over another.

As an extra challenge, try making a plan oblique drawing that includes a plan cut, as in the Frank Lloyd Wright drawing above.

### Elevation Oblique

There are other types of oblique projection that depict elevation accurately, rather than plan. These are less common in architectural representation, but see if you can recreate them using the tools introduced above.

**Cavalier Projection**: Similar to a 45 plan oblique, but an elevation is preserved rather than the plan. Lines "receding" from the viewer are the correct length, but angles and diagonal distances are distorted.

**Cabinet Projection**: Cavalier projection can appear "stretched" because we expect planes receding from our view to be foreshortened. Cabinet projection corrects for this by compressing those planes: lines along the Y-axis will be half as long in the drawing as the are in reality.

![elevation oblique](images/13-2/elevation-oblique.jpg#img-left)
*Elevation Oblique Projections*

## Conclusion

In this tutorial we learned about different ways of projecting three-dimensional geometry onto a two-dimensional picture plane, but we did so using only line geometry. Next time we'll cover simple materials, lighting and rendering.
