---
moduleid: 12
title: The Rhino Interface
published: True
slug: rhino-interface
---
# The Rhino Interface
## Module Summary

In this first tutorial, we’ll go over the basics of how to navigate in the Rhino environment, and how to use commands to create and modify geometry.

## Getting Started in Rhino

Getting started in Rhino is pretty easy, especially if you already have experience with other modeling or drafting applications like AutoCAD or SketchUp. But we'll kick off with a general overview to get you oriented.

If you prefer to follow along with a video, a version of this tutorial can also be seen here:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/603252807?h=28246f992b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Introduction to Rhino 1 of 3: Interface"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Creating a New Project

If you don't have Rhino installed, you can download it <a href="https://www.rhino3d.com/download/">here</a>, and either buy a license or start a free 90-day trial. These tutorials will all use Rhino 7 for Windows. Earlier and Mac versions are pretty similar, but you may encounter some differences if you aren't using the same release.

Once you have Rhino downloaded and installed, go ahead and open it. You’ll have the option of either reopening a recent file or starting a new one. To create a new model, choose a template. This sets your units and unit tolerances, both of which can be changed later if needed.

![rhino-template](images/rhino-new-doc.png#img-left)

After you've created a new file, you'll see this:

![rhino-new-file](images\rhino-home.png#img-left)

Most of your window is taken up by four <b>Viewports</b> into the modeling environment: “Top,” “Front,” “Right,” and “Perspective.” 

You can <b>navigate</b> through this space with your right mouse button. Dragging the right mouse button orbits the camera (in 3D views; in 2D views it pans). Holding SHIFT while you drag pans the camera, and holding CTRL zooms in and out. You can also zoom with the scroll wheel.

### Adding Geometry to the Scene

There are a few ways of accessing <b>commands</b> in Rhino. One is through dropdown menus at the top of the screen. Another is by using the toolbars on the top and left of your viewports. Many of these will have a small arrow in the bottom right corner, which you can click to reveal related commands. For instance, to draw a simple straight line, click the arrow in the corner of the Polyline icon and select the first icon in the expanded menu.

Text will then appear at the top of your screen, in the <b>command prompt</b>, telling you what steps to take to complete the operation.

To draw the line, left-click twice in one of your viewports (top view, let's say), and a line will be drawn between the two points where you click.

![rhino-new-file](images\drawing-a-line.gif#img-left)

Toolbars and dropdown menus can be useful when you're first learning Rhino, to help you discover and remember what's available, but as you get comfortable you'll execute pretty much all your commands by typing them directly into the command prompt. Type the word "box," for instance, followed by either "enter" or the spacebar to input the command. Then follow the prompts, clicking to choose two corners for the base of your box, and once more for the height. Use the perspective viewport this time, since the box is a 3D object.

![rhino-new-file](images\drawing-a-box.gif#img-left)

To make it easier to see what we're doing, since we don't need to see all of these views of our modeling environment at once right now, let's maximize the perspective viewport by double-clicking on the viewport name in the top left corner. Let's also make our geometry appear solid by clicking the arrow next to the viewport name, and choosing the "Shaded" view mode. Check out the other view modes too, while you're at it. "Ghosted" keeps objects semi-transparent, and "Arctic" gives everything a uniform white appearance with soft shading effects. Creating custom display modes will be covered in a later module.

![rhino-new-file](images\maximize-view-mode.gif#img-left)

To return to the 4-viewport view you can double-click the name in the top left corner again, or you can move directly from one view to another using the labeled viewport tabs on the bottom left.

The names of Rhino commands are often refreshingly obvious. A "Sphere," "Cylinder," "Pyramid" or "Plane" can be created just by typing in those words. Go ahead and add some new objects, either by typing or by exploring the toolbars. Also, if you don't have anything typed in the command prompt, "enter" and spacebar can be used to repeat the last command you used, which saves a lot of time when you're doing one operation repeatedly. Try this out too, and populate your scene a bit.

![rhino-new-file](images\geo-populated.png#img-left)

Typing out entire commands can take a while. To speed things up, Rhino will auto-complete as you type: the command it predicts is most likely will appear after what you've typed so far, and can be executed as usual with enter or spacebar. Other commands beginning with or just containing what you've typed will be listed below, and these can be selected either with the mouse or with the up and down arrows on your keyboard.

![rhino-new-file](images\predictive-text.gif#img-left)

Even faster, though, is using custom shortcuts called "aliases." Access these through the dropdown menus at the top of your screen, choosing Tools >> Options, and then finding "Aliases" under "Rhino Options." You'll see a list of short key sequences, and the commands they're shortcuts for. By default you won't have very many, but you can add custom ones for things you use frequently, or <a href=""> download and import this list. </a>

![rhino-new-file](images\aliases.gif#img-left)

### Basic Modifications

Now that you have some objects in your scene, we can look at how to modify them. To select an object, simply left-click on it. Select additional objects one at a time by holding shift while you click, or remove an object from the selection by holding Ctrl.

Select a group of objects by dragging a window around them. If you drag the window left-to-right, only objects completely within the window will be selected. If you drag right-to-left, objects intersected by the window will be selected as well. You can select irregularly arranged collections with the "lasso" command. CTRL + A selects all the active objects in the scene, and ESC clears your selection set.

![rhino-new-file](images\selection.gif#img-left)

There are also commands for selecting different categories of object, all of which start with "Sel-". "SelCrv" selects all curves (lines, polylines, etc.), while "SelPolysurf" selects all polysurfaces (objects made of planes and other surfaces joined together, e.g. boxes). There are a lot of these, which you can see by typing "Sel" in the command prompt.

Commands to make changes to objects in the scene are also entered into the command prompt, and often have straightforward names. Try using the "move," "scale," and "rotate" commands on your objects.

![rhino-new-file](images\basic-edits.gif#img-left)

These three alterations can also be made using a tool called the Gumball: to turn it on, click the Gumball button on the bottom of your window. Drag the arrows to move an object along an axis, drag the arcs to rotate it around an axis, and drag the squares to resize it along one axis (hold SHIFT to scale it uniformly).

![rhino-new-file](images\gumball.gif#img-left)

To delete an object, use delete or backspace (or create an alias for the "Delete" command).

### Drafting Constraints

So far, whenever you've clicked in the viewport to complete a command, Rhino has taken as input precisely the place where you clicked: choose two points to create a line, and that's exacly where the line appears. But very often, when we're drafting or modeling, we want what we make to be constrained in various ways, to make our work more precise. We want lines to follow right angles, elements to line up with each other, edges to meet exactly without gaps or overlap. To acheive this Rhino has constraints which we can turn on or off as needed. These are at the bottom of the screen, near where the Gumball button was.

To make your geometry align to the X and Y axes, hold down the SHIFT key (for instance, between choosing the first and second points of a line). Or if you want to work this way most of the time, click the "Ortho" (for orthogonal) button, and use SHIFT to toggle the constraint off as needed.

![rhino-new-file](images\ortho.gif#img-left)

"OSnap" (Object Snap) makes your mouse "stick" to different features of geometry, like endpoints, midpoints, and edges. It's often best to work with most of these turned on.

![rhino-new-file](images\osnap.gif#img-left)

"SmartTrack" creates temporary guides for you as you're working: hover over a point in your scene to easily align with it, for example.

![rhino-new-file](images\smarttrack.gif#img-left)

### Panels

On the right side of your screen, you'll find panels displaying information about your scene and the objects in it. By default, you'll only see the Properties panel, which shows attributes about whatever objects are selected (if nothing is selected, it gives you info about the viewport). Other panels are nested in tabs, represented by icons up at the top, and even more can be turned on by right-clicking in this area.

Other than Properties, the most essential panel is Layers. The icon for this one looks like a slice of cake. To be able to access both these panels easily, drag that icon out into the viewport, and then drag it back underneath the Properties panel, to have them both docked on the side of your screen.

![rhino-new-file](images\panel-dock.gif#img-left)

Keeping geometry organized in different "layers" is essential for working efficiently in Rhino. Layers let you deal with collections of similar objects as a class, rather than one at a time: hiding, locking, or selecting them, and controlling the way they appear.

When you first create a Rhino file, it will have a few numbered layers in addition to the "Default" layer. You can rename these by clicking the name, or add and delete layers by right-clicking. Hide or lock layers temporarily with the lightbulb and lock icons, or change the display color of the objects on a layer by clicking the color swatch.

![rhino-new-file](images\layers.gif#img-left)

### Conclusion

This has been a very brief overivew to get you started in Rhino. Play around with the different elements of the interface described above to get comfortable with the basics. But to really get started with the software, we need to try modeling a real project! We'll jump into that in the next module in this sequence.