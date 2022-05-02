---
moduleid: 121
title: The Rhino Interface
published: True
slug: rhino-interface
authors:
 - "Zachary White"
---
# The Rhino Interface
## Module Summary

In this first tutorial, we’ll go over the basics of how to navigate in the Rhino environment, and how to use commands to create and modify geometry.

## Getting Started in Rhino

Getting started in Rhino is pretty easy, especially if you already have experience with other modeling or drafting applications like AutoCAD or SketchUp. But we'll kick off with a general overview to get you oriented.

### Creating a New Project

If you don't have Rhino installed, you can **download** it [here]("https://www.rhino3d.com/download/"), and either buy a license or start a free 90-day trial. These tutorials will all use **Rhino 7 for Windows**. Earlier and Mac versions are very similar, but you may encounter some differences if you aren't using the same release.

Once you have it downloaded and installed, go ahead and **open Rhino**. You’ll have the option of either reopening a recent file or starting a new one. To create a new model, **choose a template**. This sets your units and unit tolerances, both of which can be changed later if needed.

![rhino templates](images/12-1/rhino-new-doc.png#img-full)
*Choosing a Rhino Template*

After you've created a new file, you'll see this:

![new rhino file](images/12-1/rhino-home.png#img-full)
*An empty Rhino file*

Most of your window is taken up by four <b>Viewports</b> into the modeling environment: `Top`, `Front`, `Right`, and `Perspective`. 

You can navigate through this space with your right mouse button.

Drag the right mouse button to orbit the camera (in 3D views; in 2D views this will pan the camera). Hold `SHIFT` while you drag to pan the camera, and hold `CTRL` to zoom in and out. You can also zoom with the scroll wheel.

### Adding Geometry to the Scene

There are a few ways of accessing **commands** in Rhino. One is through dropdown menus at the top of the screen. Another is by using the toolbars on the top and left of your viewports. Many of these will have a small arrow in the bottom right corner, which you can click to reveal related commands. 

To draw a simple straight line, click the arrow in the corner of the Polyline icon and select the first icon in the expanded menu.

Text will then appear at the top of your screen, in the **command prompt**, telling you what steps to take to complete the operation.

To draw the line, left-click twice in one of your viewports (top view, let's say), and a line will be drawn between the two points where you click.

![drawing a line](images/12-1/drawing-a-line.gif#img-full)
*Drawing a Line*

Toolbars and dropdown menus can be useful when you're first learning Rhino, to help you discover and remember what's available, but as you get comfortable you'll execute pretty much all your commands by typing them directly into the command prompt.

Type the word "box," followed by either `ENTER` or  `SPACEBAR` to input the command. Then follow the prompts, clicking to choose two corners for the base of your box, and once more for the height. **Use the perspective viewport** this time, since the box is a 3D object.

![modeling a box](images/12-1/drawing-a-box.gif#img-full)
*Modeling a Box*

To make it easier to see what we're doing, since we don't need to see all of these views of our modeling environment at once right now, let's **maximize the perspective viewport** by double-clicking on the viewport name in the top left corner. Let's also make our geometry appear solid by clicking the arrow next to the viewport name, and choosing the **"Shaded" view mode**. Check out the other view modes too, while you're at it. "Ghosted" keeps objects semi-transparent, and "Arctic" gives everything a uniform white appearance with soft shading effects. Creating custom display modes will be covered in a later module.

![maximize viewport, switch to shaded view](images/12-1/maximize-view-mode.gif#img-full)
*Shaded View*

To return to the 4-viewport view you can double-click the name in the top left corner again, or you can move directly from one view to another using the labeled viewport tabs on the bottom left.

The names of Rhino commands are often refreshingly obvious. A `Sphere`, `Cylinder`, `Pyramid` or `Plane` can be created just by typing in those words. Go ahead and **add some new objects**, either by typing or by exploring the toolbars.

If you don't have anything typed in the command prompt, `ENTER` and `SPACEBAR` can be used to **repeat the last command you used**, which saves a lot of time when you're doing one operation repeatedly. Try this out too, and populate your scene a bit.

![various geometry](images/12-1/geo-populated.png#img-full)
*Assorted Geometry*

Typing out entire commands can take a while. To speed things up, Rhino will **auto-complete** as you type: the command it predicts will appear after what you've typed so far, and can be executed as usual with `ENTER` or `SPACEBAR`. Other commands beginning with, or just containing, what you've typed will be listed below, and these can be selected either with the mouse or with the up and down arrows on your keyboard.

![auto-complete](images/12-1/predictive-text.gif#img-full)
*Command Prompt auto-completion*

Even faster, though, is using **custom shortcuts** called **aliases**. Access these through the dropdown menus at the top of your screen, choosing Tools >> Options, and then finding "Aliases" under "Rhino Options." You'll see a list of short key sequences, and the commands they're shortcuts for. By default you won't have very many, but you can add custom ones for things you use frequently, or [download and import this list](). </a>

![aliases](images/12-1/aliases.gif#img-full)
*Rhino Aliases*

### Basic Modifications

Now that you have some objects in your scene, we can look at how to modify them. To **select an object**, left-click on it. **Select additional objects** one at a time by holding `SHIFT` while you click, or remove an object from the selection by holding `CTRL`.

**Select a group of objects** by dragging a window around them. If you drag the window left-to-right, only objects completely within the window will be selected. If you drag right-to-left, objects intersected by the window will be selected as well. You can select irregularly arranged collections with the `Lasso` command. `CTRL + A` selects all the active objects in the scene, and `ESC` clears your selection.

![selecting objects](images/12-1/selection.gif#img-full)
*Object Selection*

There are also commands to **select objects by category**, all of which start with "Sel-". `SelCrv` selects all curves (lines, polylines, etc.), while `SelPolysurf` selects all polysurfaces (objects made of planes and other surfaces joined together, e.g. boxes). There are a lot of these, which you can see by typing "Sel" in the command prompt.

Commands to **modify objects** already in the scene are also entered into the command prompt, and often have common-sense names. Try using  `Move`, `Scale`, and `Rotate` on your objects.

![basic geometry edits](images/12-1/basic-edits.gif#img-full)
*Move, Scale, Rotate*

These three alterations can also be made using a tool called the **Gumball**. To turn it on, click the Gumball button on the bottom of your window. Drag the arrows to move an object along an axis, drag the arcs to rotate it around an axis, and drag the squares to resize it along one axis (hold `SHIFT` to scale it uniformly).

![rhino gumball](images/12-1/gumball.gif#img-full)
*Using the Gumball*

To **delete an object**, use the `DELETE` or `BACKSPACE` keys (or create an alias for the `Delete` command).

### Drafting Constraints

So far, whenever you've clicked in the viewport to complete a command, Rhino has taken as its input precisely the place where you clicked: choose two points to create a line, and that's exacly where the line appears. But very often, when we're drafting or modeling, we want what we make to be **constrained** in various ways, to make our work more precise. We want lines to follow right angles, elements to line up with each other, edges to meet exactly without gaps or overlap. To acheive this, Rhino has constraints which we can turn on or off as needed. These are at the bottom of the screen, near where the Gumball button was.

To make new geometry **align to the X and Y axes**, hold `SHIFT` (for instance, between choosing the first and second points of a line). Or if you want to work this way most of the time, click the `Ortho` (for orthogonal) button, and use `SHIFT` to toggle the constraint off as needed.

![orthogonal drawing](images/12-1/ortho.gif#img-full)
*Orthogonal Drawing*

**OSnap (Object Snap)** makes your mouse "stick" to different features of geometry, like endpoints, midpoints, and edges. It's often best to work with most of these turned on.

![object snaps](images/12-1/osnap.gif#img-full)
*Object Snaps*

**SmartTrack** creates temporary guides for you as you're working: hover over a point in your scene to easily align with it, for example.

![SmartTrack](images/12-1/smarttrack.gif#img-full)
*SmartTrack*

### Panels

On the right side of your screen, you'll find panels displaying information about your scene and the objects in it. By default, you'll only see the **Properties** panel, which shows attributes of whatever objects are selected (if nothing is selected, it gives you info about the viewport). Other panels are nested in tabs, represented by icons up at the top, and even more can be turned on by right-clicking in this area.

Other than Properties, the most essential panel is **Layers**. The icon for this one looks like a slice of cake. To be able to access both these panels easily, drag that icon out into the viewport, and then drag it back underneath the Properties panel, to have them both docked on the side of your screen.

![docking a panel](images/12-1/panel-dock.gif#img-full)
*Docking a Panel*

Keeping geometry organized in different "layers" is essential for working efficiently in Rhino. Layers let you deal with collections of similar objects as a class, rather than one at a time: hiding, locking, or selecting them, and controlling their appearances.

When you first create a Rhino file, it will have a few numbered layers in addition to the "Default" layer. You can rename these by clicking the name, or add and delete layers by right-clicking. Hide or lock layers temporarily with the lightbulb and lock icons, or change the display color of the objects on a layer by clicking the color swatch.

![rhino layers](images/12-1/layers.gif#img-full)
*Layers Panel*

### Conclusion

This has been a very brief overivew to get you started in Rhino. Play around with the different elements of the interface described above to get comfortable with the basics. But to really get started with the software, we need to try modeling a real project! We'll jump into that in the next module in this sequence.
